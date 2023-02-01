import {
	makeApiRequest,
	generateSymbol,
} from './helpers.js';
import {
	subscribeOnStream,
	unsubscribeFromStream,
} from './streaming.js';

const lastBarsCache = new Map();

const configurationData = {
    supports_search: !1,
    supports_group_request: !1,
    exchanges: [{
        value: "Default",
        name: "Default",
        desc: "Default"
    }],
    symbols_types: [{
        name: "All types",
        value: ""
    }, {
        name: "Index",
        value: "index"
    }],
    supports_marks: !1,
    supports_timescale_marks: !1,
    supports_time: !1,
    supported_resolutions: ["1", "3", "5", "15", "30", "45", "60", "120", "180", "240", "1d", "1w", "1m"],
};

async function getAllSymbols() {
	const data = await makeApiRequest('data/v3/all/exchanges');
	let allSymbols = [];

	for (const exchange of configurationData.exchanges) {
		const pairs = data.Data[exchange.value].pairs;

		for (const leftPairPart of Object.keys(pairs)) {
			const symbols = pairs[leftPairPart].map(rightPairPart => {
				const symbol = generateSymbol(exchange.value, leftPairPart, rightPairPart);
				return {
					symbol: symbol.short,
					full_name: symbol.full,
					description: symbol.short,
					exchange: exchange.value,
					type: 'crypto',
				};
			});
			allSymbols = [...allSymbols, ...symbols];
		}
	}
	return allSymbols;
}

const Udf = {
	onReady: (callback) => {
		console.log('[onReady]: Method call');
		setTimeout(() => callback(configurationData));
	},

	searchSymbols: async (
		userInput,
		exchange,
		symbolType,
		onResultReadyCallback,
	) => {
		console.log('[searchSymbols]: Method call');
		const symbols = await getAllSymbols();
		const newSymbols = symbols.filter(symbol => {
			const isExchangeValid = exchange === '' || symbol.exchange === exchange;
			const isFullSymbolContainsInput = symbol.full_name
				.toLowerCase()
				.indexOf(userInput.toLowerCase()) !== -1;
			return isExchangeValid && isFullSymbolContainsInput;
		});
		onResultReadyCallback(newSymbols);
	},

	resolveSymbol: async (
		symbolName,
		onSymbolResolvedCallback,
		onResolveErrorCallback,
		extension
	) => {
		// console.log('[resolveSymbol]: Method call', symbolName);
		// const symbols = await getAllSymbols();
		// const symbolItem = symbols.find(({
		// 	full_name,
		// }) => full_name === symbolName);
		// if (!symbolItem) {
		// 	console.log('[resolveSymbol]: Cannot resolve symbol', symbolName);
		// 	onResolveErrorCallback('cannot resolve symbol');
		// 	return;
		// }
		const symbolInfo = {
			ticker: symbolName,
			name: symbolName,
			description: "",
			type: "index",
			session: '24x7',
			timezone: 'Etc/UTC',
			exchange: "",
			minmov: 1,
			pricescale: 100,
			has_intraday: true,
			supported_resolutions: configurationData.supported_resolutions,
			volume_precision: 8,
			data_status: 'streaming',
            has_seconds: !1,
            seconds_multipliers: [],
            intraday_multipliers: ["1", "3", "5", "15", "30", "45", "60", "120", "180", "240", "1d", "1w", "1m"],
            has_daily: !0,
            has_weekly_and_monthly: !0,
            has_empty_bars: !0,
            force_session_rebuild: !0,
            has_no_volume: !0,
            format: "price"
		};
		console.log('[resolveSymbol]: Symbol resolved', symbolName);
		onSymbolResolvedCallback(symbolInfo);
	},

	getBars: async (symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) => {
		const { from, to, firstDataRequest } = periodParams;
		console.log('[getBars]: Method call', symbolInfo, resolution, from, to);
		// const parsedSymbol = parseFullSymbol(symbolInfo.full_name);
		const urlParameters = {
			symbol: symbolInfo.name,
            timeMode: `minute${resolution}`,
            beginTime: from,
            endTime: to
		};
		const query = Object.keys(urlParameters)
			.map(name => `${name}=${encodeURIComponent(urlParameters[name])}`)
			.join('&');
		try {
			const data = await makeApiRequest(`api/priceChart/indexPrices?${query}`);
			if (!data.candles || data.candles.length === 0) {
				// "noData" should be set if there is no data in the requested period.
				onHistoryCallback([], {
					noData: true,
				});
				return;
			}
			let bars = [];
			data.candles.forEach(bar => {
				if (bar.timestamp >= from && bar.timestamp < to) {
					bars = [...bars, {
						time: bar.timestamp * 1000,
						low: bar.low,
						high: bar.high,
						open: bar.open,
						close: bar.close,
					}];
				}
			});
			if (firstDataRequest) {
				lastBarsCache.set(symbolInfo.full_name, {
					...bars[bars.length - 1],
				});
			}
			console.log(`[getBars]: returned ${bars.length} bar(s)`);
			onHistoryCallback(bars, {
				noData: false,
			});
		} catch (error) {
			console.log('[getBars]: Get error', error);
			onErrorCallback(error);
		}
	},

	subscribeBars: (
		symbolInfo,
		resolution,
		onRealtimeCallback,
		subscriberUID,
		onResetCacheNeededCallback,
	) => {
		console.log('[subscribeBars]: Method call with subscriberUID:', subscriberUID);
		subscribeOnStream(
			symbolInfo,
			resolution,
			onRealtimeCallback,
			subscriberUID,
			onResetCacheNeededCallback,
			lastBarsCache.get(symbolInfo.full_name),
		);
	},

	unsubscribeBars: (subscriberUID) => {
		console.log('[unsubscribeBars]: Method call with subscriberUID:', subscriberUID);
		unsubscribeFromStream(subscriberUID);
	},
};

export default Udf;