require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {

    compilers: [
      {
      version: "0.6.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
    },
    ]
  },
  networks:{
    bnb: {
      url: "https://bsc-testnet-rpc.publicnode.com",
      accounts: ["0dbb9504fadc1c3741bf994585011a817990e4bdd28d0c8c4ed3efab67b3e10a"]
    }
  },
  etherscan: {
    
    apiKey: "PC4ZAUHXSBAI1C4WDRA19WH1BN5WC8G7GU"
  },
  sourcify: {
    
    enabled: true
  }
};
