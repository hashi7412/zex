import React, { useEffect } from 'react';
import Datafeed from './datafeed.js';
const TradeChart = (props) => {
    useEffect(() => {
        // eslint-disable-next-line no-undef
        window.tvWidget = new TradingView.widget({
            symbol: 'MATIC', // default symbol
            width: '100%',
            height: '100%',
            // fullscreen: true, // displays the chart in the fullscreen mode
            container: 'tv_chart_container',
            datafeed: Datafeed,
            library_path: '/libs/charting_library/',
            theme: "Dark",
            loading_screen: {
                backgroundColor: "#040818"
            },
            debug: true,
            autosize: true,
            charts_storage_api_version: "1.1",
            charts_storage_url: "",
            client_id: "",
            user_id: "",
            interval: "5",
            time_frames: [{
                text: "1d",
                resolution: "1",
                description: "1 Day",
                title: "1D"
            }, {
                text: "5d",
                resolution: "5",
                description: "5 Days",
                title: "5D"
            }, {
                text: "1M",
                resolution: "30",
                description: "1 Month",
                title: "1M"
            }, {
                text: "3M",
                resolution: "60",
                description: "1 Months",
                title: "3M"
            }, {
                text: "6M",
                resolution: "120",
                description: "6 Months",
                title: "6M"
            }, {
                text: "1Y",
                resolution: "1W",
                description: "1 Year",
                title: "1Y"
            }],
            disabled_features: ["header_symbol_search", "header_interval_dialog_button", "show_interval_dialog_on_key_press", "symbol_search_hot_key", "study_dialog_search_control", "header_compare", "edit_buttons_in_legend", "symbol_info", "main_series_scale_menu", "star_some_intervals_by_default", "datasource_copypaste", "right_bar_stays_on_scroll", "context_menus", "go_to_date", "compare_symbol", "timezone_menu", "remove_library_container_border"],
            enabled_features: ["dont_show_boolean_study_arguments", "use_localstorage_for_settings", "border_around_the_chart", "remove_library_container_border", "save_chart_properties_to_local_storage", "side_toolbar_in_fullscreen_mode", "hide_last_na_study_output", "constraint_dialogs_movement", "show_chart_property_page", "pane_context_menu"],
            studies_overrides: {
                "volume.volume.color.0": "#10C8A8",
                "volume.volume.color.1": "#FF4E59",
                "volume.volume.transparency": 75,
                "rsi.plot.color": "#B8DBEB",
                "rsi.hlines background.color": "#B8DBEB",
                "macd.histogram.color": "#FF4E59",
                "macd.signal.color": "#FF4E59",
                "macd.macd.color": "#B8DBEB"
            },
            custom_css_url: "./chart.v4.css",
            overrides: {
                volumePaneSize: "tiny",
                "paneProperties.background": "#040818",
                "paneProperties.vertGridProperties.color": "#171d2f",
                "paneProperties.vertGridProperties.style": 0,
                "paneProperties.horzGridProperties.color": "#171d2f",
                "paneProperties.horzGridProperties.style": 0,
                "paneProperties.crossHairProperties.color": "#4D5E90",
                "paneProperties.crossHairProperties.width": 1,
                "paneProperties.crossHairProperties.style": 2,
                "paneProperties.topMargin": 10,
                "paneProperties.bottomMargin": 5,
                "paneProperties.legendProperties.showStudyArguments": !0,
                "paneProperties.legendProperties.showStudyTitles": !0,
                "paneProperties.legendProperties.showStudyValues": !0,
                "paneProperties.legendProperties.showSeriesTitle": !0,
                "paneProperties.legendProperties.showSeriesOHLC": !0,
                "paneProperties.legendProperties.showLegend": !0,
                "paneProperties.legendProperties.showBarChange": !0,
                "scalesProperties.backgroundColor": "#040818",
                "scalesProperties.fontSize": 12,
                "scalesProperties.lineColor": "#0F1529",
                "scalesProperties.textColor": "#6678A9",
                "scalesProperties.scaleSeriesOnly": !1,
                "scalesProperties.showSeriesLastValue": !0,
                "scalesProperties.showSeriesPrevCloseValue": !1,
                "scalesProperties.showStudyLastValue": !1,
                "scalesProperties.showStudyPlotLabels": !1,
                "scalesProperties.showSymbolLabels": !1,
                "mainSeriesProperties.style": 1,
                "mainSeriesProperties.showCountdown": !1,
                "mainSeriesProperties.visible": !0,
                "mainSeriesProperties.showPriceLine": !0,
                "mainSeriesProperties.priceLineWidth": 1,
                "mainSeriesProperties.priceLineColor": "",
                "mainSeriesProperties.showPrevClosePriceLine": !1,
                "mainSeriesProperties.prevClosePriceLineWidth": 1,
                "mainSeriesProperties.prevClosePriceLineColor":
                "rgba( 85, 85, 85, 1)",
                "mainSeriesProperties.minTick": "default",
                "mainSeriesProperties.priceAxisProperties.autoScale": !0,
                "mainSeriesProperties.priceAxisProperties.autoScaleDisabled": !1,
                "mainSeriesProperties.priceAxisProperties.percentage": !1,
                "mainSeriesProperties.priceAxisProperties.percentageDisabled": !1,
                "mainSeriesProperties.priceAxisProperties.log": !1,
                "mainSeriesProperties.priceAxisProperties.logDisabled": !1,
                "symbolWatermarkProperties.color": "rgba(255, 255, 255, 0)",
                "mainSeriesProperties.candleStyle.upColor": "#10C8A8",
                "mainSeriesProperties.candleStyle.downColor": "#FF4E59",
                "mainSeriesProperties.candleStyle.drawWick": !0,
                "mainSeriesProperties.candleStyle.drawBorder": !1,
                "mainSeriesProperties.candleStyle.borderColor": "#10C8A8",
                "mainSeriesProperties.candleStyle.borderUpColor": "#10C8A8",
                "mainSeriesProperties.candleStyle.borderDownColor": "#FF4E59",
                "mainSeriesProperties.candleStyle.wickUpColor": "#10C8A8",
                "mainSeriesProperties.candleStyle.wickDownColor": "#FF4E59",
                "mainSeriesProperties.candleStyle.barColorsOnPrevClose": !1,
                "mainSeriesProperties.hollowCandleStyle.upColor": "#10C8A8",
                "mainSeriesProperties.hollowCandleStyle.downColor": "#FF4E59",
                "mainSeriesProperties.hollowCandleStyle.drawWick": !0,
                "mainSeriesProperties.hollowCandleStyle.drawBorder": !0,
                "mainSeriesProperties.hollowCandleStyle.borderColor": "#10C8A8",
                "mainSeriesProperties.hollowCandleStyle.borderUpColor": "#10C8A8",
                "mainSeriesProperties.hollowCandleStyle.borderDownColor": "#FF4E59",
                "mainSeriesProperties.hollowCandleStyle.wickColor": "#93B6F2",
                "mainSeriesProperties.haStyle.upColor": "#10C8A8",
                "mainSeriesProperties.haStyle.downColor": "#FF4E59",
                "mainSeriesProperties.haStyle.drawWick": !0,
                "mainSeriesProperties.haStyle.drawBorder": !1,
                "mainSeriesProperties.haStyle.wickColor": "#93B6F2",
                "mainSeriesProperties.haStyle.barColorsOnPrevClose": !1,
                "mainSeriesProperties.barStyle.upColor": "#10C8A8",
                "mainSeriesProperties.barStyle.downColor": "#FF4E59",
                "mainSeriesProperties.barStyle.barColorsOnPrevClose": !1,
                "mainSeriesProperties.barStyle.dontDrawOpen": !1,
                "mainSeriesProperties.lineStyle.color": "#27A2F8",
                "mainSeriesProperties.lineStyle.linestyle": 0,
                "mainSeriesProperties.lineStyle.linewidth": 2,
                "mainSeriesProperties.lineStyle.priceSource": "close",
                "mainSeriesProperties.areaStyle.color1": "#27A2F8",
                "mainSeriesProperties.areaStyle.color2": "#27A2F8",
                "mainSeriesProperties.areaStyle.linecolor": "#27A2F8",
                "mainSeriesProperties.areaStyle.linestyle": 0,
                "mainSeriesProperties.areaStyle.linewidth": 2,
                "mainSeriesProperties.areaStyle.priceSource": "close",
                "mainSeriesProperties.baselineStyle.baselineColor": "#10C8A8",
                "mainSeriesProperties.baselineStyle.topFillColor1":
                "rgba( 46, 129, 147, 0.05)",
                "mainSeriesProperties.baselineStyle.topFillColor2":
                "rgba( 64, 149, 167, 0.05)",
                "mainSeriesProperties.baselineStyle.bottomFillColor1":
                "rgba( 143, 91, 91, 0.05)",
                "mainSeriesProperties.baselineStyle.bottomFillColor2":
                "rgba( 167, 111, 80, 0.05)",
                "mainSeriesProperties.baselineStyle.topLineColor": "#10C8A8",
                "mainSeriesProperties.baselineStyle.bottomLineColor": "#FF4E59",
                "mainSeriesProperties.baselineStyle.topLineWidth": 1,
                "mainSeriesProperties.baselineStyle.bottomLineWidth": 1,
                "mainSeriesProperties.baselineStyle.priceSource": "close",
                "mainSeriesProperties.baselineStyle.transparency": 50,
                "mainSeriesProperties.baselineStyle.baseLevelPercentage": 50,
            }
        });
    }, [])
    return (
        <div id="tv_chart_container" className='h-[50vh]'>
        </div>
    );
}

export default TradeChart;