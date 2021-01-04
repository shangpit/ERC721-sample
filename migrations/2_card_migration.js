const contractConfig = require('../contract-config.js');
const Card = artifacts.require('Card');

module.exports = (deployer, network, accounts) => {
  deployer.then(async () => {
    const adminAddress = accounts[0] || contractConfig[network].adminAddress;
    const token = await deployer.deploy(Card, accounts[1], { from: adminAddress });
    process.env.tokenAddress = token.address;
  })
}
