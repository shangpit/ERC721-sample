pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Card is ERC721, Ownable {
    address payable private _devAddress;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor(address payable devAddress) public ERC721("Card", "CARD") {
        _devAddress = devAddress;
    }

    /**
     * @notice mint fee is 0.1 ETH = 10 ^ 17 wei
     */
    function mintItem(string memory tokenURI)
        public
        payable
        returns (uint256)
    {
        require(msg.value >= 10**uint256(17), 'Not enough funds!');
        _devAddress.transfer(msg.value);
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    /**
     * @notice burn fee is 0.1 ETH = 10 ^ 17 wei
     */
    function burnItem(uint256 tokenId)
        public
        payable
        returns (bool)
    {
        require(msg.value >= 10**uint256(17), 'Not enough funds!');
        _devAddress.transfer(msg.value);
        _burn(tokenId);
        return true;
    }
}
