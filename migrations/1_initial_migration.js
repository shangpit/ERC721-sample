const Migrations = artifacts.require('Migrations');

const logBytecodes = (contract) => {
  console.log(`${contract.contractName} || bytecode: ${contract.bytecode.length} || deployedBytecode: ${contract.deployedBytecode.length}`);
}

/** log out all contract bytecode lengths */
const Card = artifacts.require('Card');

logBytecodes(Card);

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
