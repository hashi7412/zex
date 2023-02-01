export const NETWORKS = {
    mainnet: {
      id: 1,
      rpc: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMYKEY}`,
      text: "Polygon Mainnet",
      chain: 137,
      explorer: "https://polygonscan.com",
    },
    testnet: {
      id: 2,
      rpc: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMYKEY}`,
      text: "Polygon Testnet",
      chain: 80001,
      explorer: "https://mumbai.polygonscan.com",
      assetContractAddress: 0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889,
      orderContractAddress: 0xA187457BAc9a236989c9052ffC7619Cb5A6eE1Ea
    },
};
  