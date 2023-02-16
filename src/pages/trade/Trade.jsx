import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import TradeChart from '../../components/trade-page/trade-chart/TradeChart';
import TradePageHeader from '../../components/trade-page/trade-page-header/TradePageHeader';
import TradePageRightBar from '../../components/trade-page/trade-page-right-bar/TradePageRightBar';
import TradePageTab from '../../components/trade-page/trade-page-tab/TradePageTab';
// import { useQuery, gql } from '@apollo/client';
import './trade.scss';

// const GET_LOCATIONS = gql`
//   query GetLocations {
//     locations {
//       id
//       name
//       description
//       photo
//     }
//   }
// `;

const Trade = ({setIsModalOpen}) => {
    const [ data, setData ] = useState();


    const end = new Date();
    const endTime = Math.floor((end.getTime()) / 1000);
    const begin = new Date(end);
    begin.setMinutes(end.getMinutes() - 5);
    const beginTime = Math.floor((begin.getTime()) / 1000);

    useEffect(() => {
        fetch(`https://app.mux.network/api/priceChart/indexPrices?symbol=ETH&timeMode=minute5&beginTime=${beginTime}&endTime=${endTime}&dataType=mux`)
          .then(res => res.json())
          .then(
            (result) => {
              setData(result.candles);
            }
          )
    }, [beginTime, endTime]);

    const leng = data.length;
    const currentData = data[leng - 1];

    return (
        <div className='trade-page'>
            <Row >
                <Col flex="3" className='trade-page-left '>
                    <div className='trade-page-header px-4'>
                        <TradePageHeader currentData={currentData} />
                    </div>
                    <div className='trade-page-chart mb-3'>
                        <TradeChart/>
                    </div>
                    <div className='trade-tab-sec'>
                        <TradePageTab setIsModalOpen={setIsModalOpen}/>
                    </div>
                </Col>
                <Col flex="1" className='trade-page-right'>
                    <TradePageRightBar currentData={currentData}  setIsModalOpen={setIsModalOpen}/>
                </Col>
            </Row>
        </div >
    );
}

export default Trade;