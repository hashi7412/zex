import { Button, Card, Col, Divider, Input, InputNumber, Radio, Row, Select, Slider, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi';
// import { usePrepareSendTransaction, useSendTransaction } from 'wagmi';
// import { getProviders } from '../../../utils/common';
import zexStorageABI from '../../../config/abis/zexStorage.json';
import { ethers } from 'ethers';

function TradePageRightBar({setIsModalOpen, currentData}) {
    const { isConnected } = useAccount();
    
    const fee = 0.08;
    const price = currentData.close;

    const [ limitPrice, setLPrice ] = useState(price);
    const [ stopPrice, setSPrice ] = useState(price);
    const [ usedAmount, setUsedAmount ] = useState();
    const [ resultAmount, setResultAmount ] = useState();
    

    const changeUsedAmount = (value) => {
        setUsedAmount(value);
        let amount = ((value * (1 - fee)) / price) * inputValue;
        if (amount === 0) {
            setResultAmount();
        } else {
            amount = amount.toFixed(4);
            setResultAmount(amount);
        }
    }

    const changeResultAmount = (value) => {
        setResultAmount(value);
        let amount = (value * price) / (1 - fee);
        if (amount === 0) {
            setUsedAmount();
        } else {
            amount = amount.toFixed(4);
            setUsedAmount(amount);
        }
    }

    const [ status, setStatus ] = useState('market');

    const handleChange = (value) => {
        setStatus(value);
        setLPrice(price);
        setSPrice(price);
    };

    const [value, setValue] = useState(1);
    const onChange = (e) => {
        setValue(e.target.value);
    };

    // Slider range
    const marks = {
        1: '1x',
        25: '25x',
        50: '50x',
        75: '75x',
        100: '100x',
    };

    const [inputValue, setInputValue] = useState(1);
    const onChange1 = (newValue) => {
        setInputValue(newValue);
        let amount = ((value * (1 - fee)) / price) * newValue;
        if (amount === 0) {
            setResultAmount();
        } else {
            amount = amount.toFixed(4);
            setResultAmount(amount);
        }
    };

    const { config } = usePrepareContractWrite({
        address: '0xA187457BAc9a236989c9052ffC7619Cb5A6eE1Ea',
        abi: zexStorageABI,
        functionName: 'placePositionOrder2',
        args: ["0x494239ffe9057d05ad5f8c4a23a58f306bb13e9b010101000000000000000000", 100000000000000, 990000000000000, 0, 0, 128, 8640000, "0x0000000000000000000000000000000000000000000000000000000000000000"],
        overrides:{
            gasLimit:1000000,
            value: ethers.utils.parseEther('0.01'),
        }
    })
    const { data, isLoading, isSuccess, write, error } = useContractWrite(config)

    const { data: maintainer, isError, isLoading: maintainerLoading } = useContractRead({
        address: '0xA187457BAc9a236989c9052ffC7619Cb5A6eE1Ea',
        abi: zexStorageABI,
        functionName: 'owner',
    })

    const buy = () => {

    }

    const sell = () => {

    }
    return (
        <div className='trade-page-right-bar'>
            <div className='trade-page-right-bar-header p-3'>
                <div className='flex items-center justify-between'>
                    <Button className='zex-btn-sec' size='large'disabled={!write} onClick={() => write?.()} >Isolated</Button> {/**/}

                    <Radio.Group className='cus-radio-group' size="large" onChange={onChange} value={value} defaultValue="1">
                        <Radio.Button value={1} onClick={buy}>Buy / Long</Radio.Button>
                        <Radio.Button className='orange' value={2} onClick={sell}>Sell / Short</Radio.Button>
                    </Radio.Group>
                    <Divider type="vertical" />
                    <Button size='large' className='tp border-0 zex-btn-sec'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments-horizontal" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="14" cy="6" r="2"></circle>
                            <line x1="4" y1="6" x2="12" y2="6"></line>
                            <line x1="16" y1="6" x2="20" y2="6"></line>
                            <circle cx="8" cy="12" r="2"></circle>
                            <line x1="4" y1="12" x2="6" y2="12"></line>
                            <line x1="10" y1="12" x2="20" y2="12"></line>
                            <circle cx="17" cy="18" r="2"></circle>
                            <line x1="4" y1="18" x2="15" y2="18"></line>
                            <line x1="19" y1="18" x2="20" y2="18"></line>
                        </svg>
                    </Button>
                </div>
            </div>
            <div className='trade-page-right-bar-body p-3'>
                <Row gutter={10}>
                    <Col xs={12}>
                        <Card className='zex-cus-card'>
                            <Tooltip title="This position will be opened on ZEX.">
                                <div className='market-icon-content'>
                                    <img className='market-icon-postion-img' src='/img/zexicon.png' alt="mux"/>
                                </div>
                            </Tooltip>
                            <div className='text-xs'>
                                Market Price
                            </div>
                            {
                                status === 'market' 
                                    ? <div className='text-lg font-bold'>$ { price }</div>
                                    : (
                                        status === 'limit'
                                            ?   
                                                <div className='flex justify-center items-center gap-x-2 font-bold'>
                                                    <p className='text-white text-lg'>$</p>
                                                    <Input className='cus-input' value={limitPrice} placeholder="0.0" onChange = {(e) => setLPrice(e.target.value)} />
                                                </div>
                                            : 
                                                <div className='flex justify-center items-center gap-x-2 font-bold'>
                                                    <p className='text-white text-lg'>≥$</p>
                                                    <Input className='cus-input' value={stopPrice} placeholder="0.0" onChange = {(e) => setSPrice(e.target.value)} />
                                                </div>
                                    )
                            }
                            
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card className='zex-cus-card'>
                            <div className='text-xs text-right'>
                                Market Price
                            </div>
                            <div className='text-lg font-bold text-right'>
                                <Select
                                    className='cus-select'
                                    style={{
                                        width: "142px"
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
                        </Card>
                    </Col>
                    <Col xs={24}>
                        <Card className='zex-cus-card'>
                            <Row gutter={10} align="bottom">
                                <Col xs={12}>
                                    {
                                        usedAmount > 0 
                                            ?   <div className='text-xs '>
                                                    Use: $ { usedAmount }
                                                </div>
                                            :   <div className='text-xs'>
                                                    Use: $0
                                                </div>
                                    }
                                    <div>
                                        <Input className='cus-input' placeholder="0.0" value={ usedAmount } onChange={(e) => changeUsedAmount(e.target.value)} />
                                    </div>
                                </Col>
                                <Col xs={12} >
                                    <div className='text-right font-bold text-base whitespace-nowrap text-white flex place-content-end'>
                                        Select Collateral
                                        <svg xmlns="http://www.w3.org/2000/svg" className='ml-1' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col xs={24}>
                        <div className='to-arrow tp text-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='m-auto' width="20" height="20" viewBox="0 0 24 24" strokwidth="2" stroke="currentColor" fill="none" >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="18" y1="13" x2="12" y2="19"></line>
                                <line x1="6" y1="13" x2="12" y2="19"></line>
                            </svg>
                        </div>
                        <Card className='zex-cus-card'>
                            <Row gutter={10} align="bottom">
                                <Col xs={12}>
                                    <div className='text-xs '>
                                        {
                                            value === 1 
                                                ?   (
                                                        (usedAmount * (1 - fee) * inputValue) > 0
                                                            ? <p>Long: $ { (usedAmount * (1 - fee) * inputValue).toFixed(4) }</p>
                                                            : <p>Long: $0</p>
                                                )
                                                :   (
                                                        (usedAmount * (1 - fee) * inputValue) > 0
                                                            ? <p>Short: $ { (usedAmount * (1 - fee) * inputValue).toFixed(4) }</p>
                                                            : <p>Short: $0</p>
                                                )
                                        }
                                    </div>
                                    <div>
                                        <Input className='cus-input' placeholder="0.0" value={ resultAmount } onChange={(e) => changeResultAmount(e.target.value)} />
                                    </div>
                                </Col>
                                <Col xs={12} >
                                    <div className='text-right font-bold text-base whitespace-nowrap text-white flex place-content-end'>
                                        Select Market
                                        <svg xmlns="http://www.w3.org/2000/svg" className='ml-1' width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        <Card className='leverage-card'>
                            <div className='flex justify-between tp text-xs mb-4'>
                                <div>Leverage: {inputValue}x</div>
                                <div>
                                    Shortcut
                                </div>
                            </div>
                            <Row gutter={10}>
                                <Col xs={6}>
                                    <InputNumber
                                        className='slider-input'
                                        min={1}
                                        max={100}
                                        placeholder="1"
                                        value={inputValue}
                                        onChange={onChange1}
                                    />
                                </Col>
                                <Col xs={18}>
                                    <Slider marks={marks} defaultValue={1} onChange={onChange1}
                                        value={typeof inputValue === 'number' ? inputValue : 0} />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <div className='my-5'>
                    {!isConnected && <Button className='w-full' size='large' type='primary' onClick={()=>setIsModalOpen(true)}>Connect Wallet</Button>}
                </div>
                <div>
                    <div className='flex justify-between tp text-sm mb-2'>
                        <div>Available Liquidity</div>
                        <div className='text-white'>21.72846 MATIC</div>
                    </div>
                    <div className='flex justify-between tp text-sm mb-2'>
                        <div>Profits In</div>
                        <div className='text-white'>MATIC</div>
                    </div>
                    <div className='flex justify-between tp text-sm mb-2'>
                        <div>Liq. Price</div>
                        <div className='text-white'>--</div>
                    </div>
                    <div className='flex justify-between tp text-sm mb-2'>
                        <div>Collateral</div>
                        <div className='text-white'>--</div>
                    </div>
                    <div className='flex justify-between tp text-sm mb-2'>
                        <div>Fees</div>
                        <div className='text-white'>--</div>
                    </div>
                    <div className='flex justify-between tp text-sm mb-2'>
                        <div>Spread</div>
                        <div className='text-white'>0%</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TradePageRightBar;