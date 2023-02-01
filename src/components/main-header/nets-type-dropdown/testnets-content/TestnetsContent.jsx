import React from 'react';

function TestnetsContent(props) {
    return (
        <div className='nets-dropdown-items'>
            <ul className='tp p-0 font-bold text-sm'>
                <li className='p-2'>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <div className='mr-2'><img className='h-5' src={"https://app.mux.network/img/zkSync.465b977f.svg"} alt="zk"/></div>
                            <div>zkSync alpha testnet</div>
                        </div>
                        <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="17" y1="7" x2="7" y2="17"></line>
                                <polyline points="8 7 17 7 17 16"></polyline>
                            </svg>
                        </div>
                    </div>
                </li >
                <li className='p-2'>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <div className='mr-2'><img className='h-5' src={"https://app.mux.network/img/polygon.30132dda.svg"} alt="polygon" /></div>
                            <div>Polygon Mumbai Testnet</div>
                        </div>
                        <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="17" y1="7" x2="7" y2="17"></line>
                                <polyline points="8 7 17 7 17 16"></polyline>
                            </svg>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    );
}

export default TestnetsContent;