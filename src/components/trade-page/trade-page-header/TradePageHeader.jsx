import { Divider, Select } from 'antd';
import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../../constants/networks'

function TradePageHeader(props) {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const { data, percent } = useCoinMarket();
    return (
        <div>
            <div className='flex items-center py-3 mflex-wrap gap-5'>
                <div className='flex mw-50 mmb-4'>
                    <div className='self-center'>
                        <img className='mr-3 h-8' src='https://mux-world.github.io/assets/img/tokens/MATIC.svg' alt='token'/>
                    </div>
                    <div className='mr-2'>
                        <div className='text-white font-semibold'>MATIC</div>
                        <div className='text-xs whitespace-nowrap tp'>
                            Up to 100X
                        </div>
                    </div>
                    <div className='self-center text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                </div>
                <Divider type="vertical" className='m-view-dnone' />
                <div className='mw-50 mtext-right mmb-4'>
                    <span className='font-bold text-xl text-white mr-3'>{data}</span>
                    <span className={percent > 0 ? 'text-base text-green-600' : 'text-base text-red-600'}>({percent} %)</span>
                </div>
                <Divider type="vertical" className='m-view-dnone' />
                <div className='text-xs mw-33 mmb-4 mtext-center mp-0'>
                    <div className='tp whitespace-pre-wrap'>Est. 1H Funding (L/S)</div>
                    <div className='text-white'>0.030% / 0.011%</div>
                </div>
                <Divider type="vertical" />
                <div className='text-xs mw-33 mmb-4 mtext-center mp-0'>
                    <div className='tp whitespace-pre-wrap'>Rollover</div>
                    <div className='text-white'>0.0146%</div>
                </div>
                <Divider type="vertical" />
                <div className='text-xs mw-33 mmb-4 mp-0'>
                    <div className='tp whitespace-pre-wrap'>Long / Short (Aggregator)</div>
                    <div className='text-white'> $0 / $0</div>
                </div>
                {!process.env.REACT_APP_MAINNET && <><Divider type="vertical" />
                <div className='text-xs mw-33 mmb-4 mtext-right mp-0'>
                    <div className='tp whitespace-pre-wrap text-right absolute top-[15px] right-2'>Price Source</div>
                    <div className='text-right absolute right-0'>
                        <Select
                            className='cus-select cus-select-sm text-white font-medium'
                            style={{
                                minWidth: "142px"
                            }}
                            defaultValue="MATIC"
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'auto',
                                    label: 'Auto Match',
                                },
                                {
                                    value: 'mux',
                                    label: 'MUX',
                                },
                                {
                                    value: 'gmx',
                                    label: 'GMX',
                                },
                                {
                                    value: 'gains',
                                    label: 'Gains',
                                },
                            ]}
                        />
                    </div>
                </div></>}
            </div>
        </div>
    );
}

export default TradePageHeader;

export function useCoinMarket() {
    const [state, setState] = useState({ data: [], isLoading: true });
    const updateState = (data, percent) => {
        setState(state => ({
            data: data ? data.MATIC.quote.USD.price.toFixed(4) : state.data,
            percent: percent ?  data.MATIC.quote.USD.percent_change_24h.toFixed(2) : data.MATIC.quote.USD.percent_change_24h.toFixed(2),
            isLoading: false,
        }));
    };
    async function init() {
        try {
            const res = await fetch(`${BASE_URL}/api`);
            const data = await res.json();
            console.log(data, 'data')
            updateState(data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        init();
        const id = setInterval(() => {
            init();
        }, 1 * 60 * 10);
        return () => clearInterval(id);
    }, []);
    return state;
}