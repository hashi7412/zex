import React from 'react';

function MainnetsContent(props) {
    const [atbToken, setAtbToken] = React.useState(true)
    const onClick = () => setAtbToken(false)
    const onClick1 = () => setAtbToken(true)
    return (
        <div className='nets-dropdown-items'>
            {atbToken ?
                <>
                    <ul className='tp p-0 font-bold text-sm mb-2'>
                        <li className='p-2'>
                            <div className='flex'>
                                <div className='mr-2'><img className='h-5' src={"https://app.mux.network/img/arbitrum.dd7f8f4b.svg"} alt="arbitrum"/></div>
                                <div>Arbitrum</div>
                            </div>
                        </li>
                        <li className='p-2'>
                            <div className='flex'>
                                <div className='mr-2'><img className='h-5' src={"https://app.mux.network/img/BSC.a81b35b6.svg"} alt="bsc" /></div>
                                <div>BNB Chain</div>
                            </div>
                        </li >
                        <li className='p-2'>
                            <div className='flex'>
                                <div className='mr-2'><img className='h-5' src={"https://app.mux.network/img/AvalancheChain.40daf77d.svg"} alt="AvalancheChain"/></div>
                                <div>Avalanche</div>
                            </div>
                        </li>
                        <li className='p-2'>
                            <div className='flex'>
                                <div className='mr-2'><img className='h-5' src={"https://app.mux.network/img/FantomChain.07b2eb9e.svg"} alt="Fantom" /></div>
                                <div>Fantom</div>
                            </div>
                        </li>
                    </ul>
                    <hr className='border-color' />
                    <div>
                        <ul className='tp p-0 font-bold text-sm mt-2'>
                            <li className='p-2'>
                                <div className='flex justify-between' onClick={onClick} >
                                    <div>Arbitrum Token Bridge</div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <polyline points="9 6 15 12 9 18"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </li>
                            <li className='p-2'>
                                <div className='flex justify-between'>
                                    <div>Arbitrum Explorer</div>
                                    <div>
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
                </>
                :
                <>
                    <div className='flex text-white text-base font-bold cursor-pointer' onClick={onClick1}>
                        <div className='mr-2 self-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <polyline points="15 6 9 12 15 18"></polyline>
                            </svg>
                        </div>
                        Arbitrum Token Bridge
                    </div>
                    <ul className='tp p-0 font-bold text-sm mt-2'>
                        <li className='p-2'  >
                            <div className='flex justify-between'>
                                <div>Arbitrum Explorer</div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <line x1="17" y1="7" x2="7" y2="17"></line>
                                        <polyline points="8 7 17 7 17 16"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </li>
                        <li className='p-2'  >
                            <div className='flex justify-between'>
                                <div>cBridge</div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <line x1="17" y1="7" x2="7" y2="17"></line>
                                        <polyline points="8 7 17 7 17 16"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </li>
                        <li className='p-2'  >
                            <div className='flex justify-between'>
                                <div>Connext</div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <line x1="17" y1="7" x2="7" y2="17"></line>
                                        <polyline points="8 7 17 7 17 16"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </li>
                    </ul>
                </>
            }

        </div>
    );
}

export default MainnetsContent;