const Card = artifacts.require("Card");
const truffleAssert = require('truffle-assertions');

contract("Card", accounts => {
  it("should appeare right name", () =>
    Card.deployed()
      .then(instance => instance.name.call())
      .then(name => {
        assert.equal(name, 'Card', "name fail");
      })
  );
  it("should appear right symbol", () =>
    Card.deployed()
      .then(instance => instance.symbol.call())
      .then(symbol => {
        assert.equal(symbol, 'CARD', "symbol fail");
      })
  );

  it("should not mint card if not deposit 0.1 Ether", async () => {
    const card = await Card.deployed();

    await truffleAssert.fails(
      card.mintItem('https://google.com', { from: accounts[2], value: web3.utils.toWei('1', 'micro') }),
      truffleAssert.ErrorType.REVERT,
      'Not enough funds!'
    );
  });

  

  it("should mint card", async () => {
    const card = await Card.deployed();

    await card.mintItem('https://google.com', { from: accounts[1], value: web3.utils.toWei('100', 'milliether') });
    
  });

  it("should not mint card if not deposit 0.1 Ether", async () => {
    const card = await Card.deployed();
    await card.mintItem('https://google.com', { from: accounts[1], value: web3.utils.toWei('100', 'milliether') });
    await truffleAssert.fails(
      card.burnItem(1, { from: accounts[2], value: web3.utils.toWei('1', 'micro') }),
      truffleAssert.ErrorType.REVERT,
      'Not enough funds!'
    );
  });
});