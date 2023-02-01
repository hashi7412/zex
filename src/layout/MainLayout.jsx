import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import PageRoutes from '../routes/routes';
import { useAccount, useConnect } from 'wagmi'
import { Modal, Divider } from 'antd';
const { Header, Content, Footer } = Layout;

const MainLayout = () => {
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
    const { isConnected } = useAccount();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    useEffect(()=>{
        if (isConnected) {
            setIsModalOpen(false)
        }
    }, [isConnected, setIsModalOpen])
    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 9,
                    width: '100%',
                }}
            >              
                <MainHeader setIsModalOpen={setIsModalOpen}/>
            </Header>
            <Content>
                <PageRoutes setIsModalOpen={setIsModalOpen} />
            </Content>
            <Footer>
                <MainFooter />
            </Footer>
            <Modal
                centered
                open={isModalOpen}
                onOk={handleOk} onCancel={handleCancel}
                footer={null}
            > 
                <div className='modal-header mb-6 flex items-center text-white font-bold text-base'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <line x1="5" y1="12" x2="11" y2="18"></line>
                        <line x1="5" y1="12" x2="11" y2="6"></line>
                    </svg> <Divider type="vertical" /> <span className='ml-2'>Connect Wallet</span>
                </div>
                <div className='modal-body'>
                    {connectors.map((connector) => (
                        <div className='flex justify-between p-3 connect-wallet-list mb-4 cursor-pointer' disabled={!connector.ready} key={connector.id} onClick={() => connect({ connector })}>
                            <div className='text-white font-bold text-base'>
                            {connector.name}
                            {!connector.ready && ' (unsupported)'}
                            {isLoading &&
                                connector.id === pendingConnector?.id &&
                                ' (connecting)'}
                            </div>
                            <div>
                                {connector.id==='metaMask' && <img src={'/img/MetaMask.66c9c622.svg'} alt='metamask'/>}
                                {connector.id==='coinbaseWallet' && <img src={'/img/CoinbaseWallet.2c6a98b5.svg'} alt='coinbase' />}
                                {connector.id==='walletConnect' && <img src={'/img/WalletConnect.4df4650b.svg'} alt='connect-wallet'/>}
                            </div>
                        </div>
                    ))}
                    {error && <div>{error.message}</div>}
                </div>
                <div className='modal-footer'>
                    <div className='tp text-center'>
                        Need Help? <u>Read Our Tutorials</u>
                    </div>
                </div>
            </Modal>
        </Layout>
    );
};
export default MainLayout;