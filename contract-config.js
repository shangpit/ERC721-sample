// config values stored by network name. see truffle-config.json for a mapping from network
// name to other params
module.exports = {
  'rinkeby': {
    adminAddress: '0x90b73B77B38d457243DE5E15791671FC527F31d5',
    usdtPool: '0xDA158c334480FCE879d1E8f6e60C91F3D953c69b',
  },
  'development': {
    adminAddress: null,
    usdtPool: null,
  },
  'test_local': {
    adminAddress: null,
    usdtPool: null,
  },
  'soliditycoverage': {
    adminAddress: null,
    usdtPool: null,
  },
  'audius_private': {
    adminAddress: null,
    usdtPool: null,
  },
  'staging': {
    adminAddress: null,
    usdtPool: null,
  },
  'production': {
    adminAddress: '0x90b73B77B38d457243DE5E15791671FC527F31d5',
    usdtPool: '0xDA158c334480FCE879d1E8f6e60C91F3D953c69b',
  }
}
