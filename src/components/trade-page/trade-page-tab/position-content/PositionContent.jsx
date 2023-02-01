import React from 'react';
import { Button, Table } from 'antd';
import { useAccount } from 'wagmi';
function PositionContent({setIsModalOpen}) {
    const { isConnected } = useAccount();
    const columns = [
        {
            title: 'Market',
            dataIndex: 'market',
            key: 'market',
            render: (text) => <a href="#0">{text}</a>,
        },
        {
            title: 'Size',
            dataIndex: 'size',
            key: 'size',
        },
        {
            title: 'Net Value',
            dataIndex: 'netvalue',
            key: 'netvalue',
        },
        {
            title: 'Collateral',
            dataIndex: 'collateral',
            key: 'collateral',
        },
        {
            title: 'Entry Price',
            dataIndex: 'entryprice',
            key: 'ntryprice',
        },
        {
            title: 'Mark Price',
            dataIndex: 'markprice',
            key: 'markprice',
        },
        {
            title: 'Liq. Price',
            dataIndex: 'liqprice',
            key: 'liqprice',
        },
        {
            title: 'PNL & ROE',
            dataIndex: 'pnlroe',
            key: 'pnlroe',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
        },
    ];
    const data = [
        {
            key: '1',
            market: <>
                <div className='text-white'>MTIC</div>
                <div className='text-green-500 text-xs'>Long</div>
            </>,
            size: <>
                <div className='text-white'>0.099 MATIC</div>
                <div className='tp text-xs'>$0.077</div>
            </>,
            netvalue: <div className='text-white'>$0.55</div>,
            collateral: <>
                <div className='text-white'>0.099 MATIC</div>
                <div className='tp text-xs'>$0.077</div>
            </>,
            entryprice: <div className='text-white'>$0.55</div>,
            markprice: <div className='text-white'>$0.55</div>,
            liqprice: <div className='text-white'>$0.55</div>,
            pnlroe: <>
                <div className='text-white'>Pending</div>
                <div className='tp text-xs'>Filling Order</div>
            </>,
            actions:<div><Button className='zex-btn-sec'>Cancel</Button></div>

        },

    ];

    return (
        <div className=''>
            {isConnected && <Table className='zex-table' columns={columns} dataSource={data}
                scroll={{
                    x: 200,
                }} />}
            {!isConnected && <div className='text-center items-center'>
                <div className='text-[#6678A9] mb-2'>Please connect your wallet.</div>
                <Button className='w-auto' size='large' type='primary' onClick={()=>setIsModalOpen(true)}>Connect Wallet</Button>
            </div>}
        </div>
    );
}

export default PositionContent;