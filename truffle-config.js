// Import babel for ES6 support
require('babel-register')({
  presets: [
    ['env', {
      'targets': {
        'node': '8.0'
      }
    }]
  ]
})
require('babel-polyfill')
const HDWalletProvider = require('truffle-hdwallet-provider')
const web3 = require('web3')
const { privateKey, projectId } = require('./secret.json');

const solc = {
  version: '0.6.6',
  parser: 'solcjs', // Leverages solc-js purely for speedy parsing
  settings: {
    evmVersion: 'istanbul' // istanbul is latest stable, and default setting
  }
}

solc.settings.optimizer = {
  enabled: true,
  runs: 200, // 200 is default value
  details: {
    orderLiterals: true,
    deduplicate: true,
    cse: true,
    constantOptimizer: true,
    yul: false,
  }
}

module.exports = {
  networks: {
    production: {
      provider: () => new HDWalletProvider(privateKey, `https://mainnet.infura.io/v3/${projectId}`),
      network_id: 1,
      gasPrice: web3.utils.toWei('18', 'gwei')
    },
    staging: {
      provider: () => new HDWalletProvider(privateKey, `https://mainnet.infura.io/v3/${projectId}`),
      network_id: 1,
      gasPrice: web3.utils.toWei('20', 'gwei')
    },
    development: {
      host: '127.0.0.1',
      port: 8546,
      network_id: '*',
      gasPrice: web3.utils.toWei('67', 'gwei')
    },
    test_local: {
      host: '127.0.0.1',
      port: 8556,
      network_id: '*'
    },
    rinkeby: {
      provider: () => new HDWalletProvider(privateKey, `https://rinkeby.infura.io/v3/${projectId}`),
      network_id: 4,
      gasPrice: web3.utils.toWei('10', 'gwei')
    }
  },
  compilers: {
    solc: solc
  },
  mocha: {
    enableTimeouts: false
  },
  plugins: ['solidity-coverage']
}