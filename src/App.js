import './App.css';
import MainLayout from './layout/MainLayout';
import { store } from "./store";
import { Provider } from 'react-redux';

import { WagmiConfig, createClient, configureChains } from 'wagmi'
import { polygonMumbai } from 'wagmi/chains'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const { chains, provider, webSocketProvider } = configureChains(
  [polygonMumbai],
  [alchemyProvider({ apiKey: 'hbShSsJZs1YTI3eIKVhDs0r6Lap0sKky' }), publicProvider()],
)
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})
 

function App() {
  return (
    <Provider store={store}>
      <WagmiConfig client={client}>
        <MainLayout/>
      </WagmiConfig>
    </Provider>
  );
}

export default App;
