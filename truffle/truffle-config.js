module.exports = {
  contracts_build_directory: '../client/src/contracts',
  networks: {
    development: {
      host: '127.0.0.1', // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: '*', // Any network (default: none)
    },
    ropsten: {
      host: 'https://ropsten.infura.io/v3/96622c420b9e4d1aafc9120ab9226156',
      port: '',
      network_id: '*',
    },
  },

  mocha: {},

  compilers: {
    solc: {
      version: '0.6.1', // Fetch exact version from solc-bin (default: truffle's version)
      docker: false, // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200,
        },
        evmVersion: 'byzantium',
      },
    },
  },
}
