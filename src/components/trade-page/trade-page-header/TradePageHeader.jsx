import { Divider, Select } from 'antd';
import React from 'react';

function TradePageHeader(props) {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
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
                    <span className='font-bold text-xl text-white mr-3'>1.01</span>
                    <span className='text-base text-red-600'>(- 0.33%)</span>
                </div>
                <Divider type="vertical" className='m-view-dnone' />
                <div className='text-xs mw-33 mmb-4 mp-0'>
                    <div className='tp whitespace-pre-wrap'>Long / Short</div>
                    <div className='text-white'> $13 / $18</div>

                </div>
                <Divider type="vertical" />
                <div className='text-xs mw-33 mmb-4 mtext-center mp-0'>
                    <div className='tp whitespace-pre-wrap'>Est. 8H Funding (L/S)</div>
                    <div className='text-white'>0.030% / 0.011%</div>
                </div>
                {process.env.REACT_APP_MAINNET && <><Divider type="vertical" />
                <div className='text-xs mw-33 mmb-4 mtext-right mp-0'>
                    <div className='tp whitespace-pre-wrap text-right'>Price Source</div>
                    <div className='text-right'>
                        <Select
                            className='cus-select cus-select-sm text-white font-medium'
                            style={{
                                minWidth: "142px"
                            }}
                            defaultValue="MATIC"
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'market',
                                    label: 'Market',
                                },
                                {
                                    value: 'limit',
                                    label: 'Limit',
                                },
                                {
                                    value: 'stop-market',
                                    label: 'Stop Market',
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