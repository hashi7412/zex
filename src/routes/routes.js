import React from 'react';
import { Routes, Route } from "react-router-dom";
import Liquidity from '../pages/liquidity/Liquidity';
import Trade from '../pages/trade/Trade';
function PageRoutes({ setIsModalOpen }) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Trade setIsModalOpen={setIsModalOpen} />}/>
                <Route path="/liquidity" element={<Liquidity />} />
            </Routes>
        </div>
    );
}

export default PageRoutes;