// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './ERC721Connector.sol';

contract productValidation is ERC721Connector{
    string[] public products;

    mapping(string => bool) _productsExist;

    function mint(string memory _product) public{
        require(!_productsExist[_product], 'Error: Product already exists');
        products.push(_product);
        uint256 _id = products.length - 1;

        _mint(msg.sender, _id);

        _productsExist[_product] = true;
    }

    constructor() ERC721Connector('Non-Fungible Token', 'NFT'){}
}