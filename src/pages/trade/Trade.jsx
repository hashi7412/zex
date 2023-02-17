import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import TradeChart from "../../components/trade-page/trade-chart/TradeChart";
import TradePageHeader from "../../components/trade-page/trade-page-header/TradePageHeader";
import TradePageRightBar from "../../components/trade-page/trade-page-right-bar/TradePageRightBar";
import TradePageTab from "../../components/trade-page/trade-page-tab/TradePageTab";
import axios from "axios";
// import { useQuery, gql } from '@apollo/client';
import "./trade.scss";

const Trade = ({ setIsModalOpen }) => {
  const [data, setData] = useState([]);

  const end = new Date();
  const endTime = Math.floor(end.getTime() / 1000);
  const begin = new Date(end);
  begin.setMinutes(end.getMinutes() - 5);
  const beginTime = Math.floor(begin.getTime() / 1000);

  useEffect(() => {
    if (beginTime < endTime)
      axios
        .get(
          `https://app.mux.network/api/priceChart/indexPrices?symbol=ETH&timeMode=minute5&beginTime=${beginTime}&endTime=${endTime}&dataType=mux`
        )
        .then((result) => {
          setData(result.data.candles);
        });
  }, [beginTime, endTime]);
  const length = data.length;

  return (
    <div className="trade-page">
      <Row>
        <Col flex="3" className="trade-page-left ">
          <div className="trade-page-header px-4">
            {length > 0 ? (
              <TradePageHeader currentData={data[length - 1]} />
            ) : undefined}
          </div>
          <div className="trade-page-chart mb-3">
            <TradeChart />
          </div>
          <div className="trade-tab-sec">
            <TradePageTab setIsModalOpen={setIsModalOpen} />
          </div>
        </Col>
        <Col flex="1" className="trade-page-right">
          {length > 0 ? (
            <TradePageRightBar
              currentData={data[length - 1]}
              setIsModalOpen={setIsModalOpen}
            />
          ) : undefined}
        </Col>
      </Row>
    </div>
  );
};

export default Trade;
