const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "shy uncle .....";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },

    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/84675482374fdsb4f4441052fbe943`),
        network_id: 4,       // rinkeby's id
        gas: 9000000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000,
        confirmations: 1, // # of confs to wait between deployments. (default: 0)
        skipDryRun: true
    } 
  }
};