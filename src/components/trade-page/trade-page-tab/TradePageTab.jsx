import { Switch, Tabs } from 'antd';
import React from 'react';
import PositionContent from './position-content/PositionContent';
function TradePageTab({setIsModalOpen}) {

    const items = [
        {
            label: `Positions`,
            key: '1',
            children: <PositionContent setIsModalOpen={setIsModalOpen}/>,
        },
        {
            label: `Open Orders`,
            key: '2',
            children: `Content of Tab Pane 2`,
        },
        {
            label: `Trade History`,
            key: '3',
            children: `Content of Tab Pane 3`,
        },
    ];

    const operations = 
    <>
        <div className='tp text-sm item-center flex m-view-dnone'>
            Label Positions
            <Switch className='ml-2' size="small" />
        </div>
    </>;

    return (
        <div className=''>
            <Tabs
                defaultActiveKey="1"
                type="card"
                items={items}
                tabBarExtraContent={operations}
            />
        </div>
    );
}

export default TradePageTab;