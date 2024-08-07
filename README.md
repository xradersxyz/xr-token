# XrToken Contract

## Overview

The `XrToken` contract is a BEP20 token implementation with additional functionalities such as burning, pausing, permit, and voting capabilities. This token is designed to be flexible and secure, with features that allow for decentralized governance and other advanced token management operations.

## Features

- **BEP20 Standard**: Basic token functionality.
- **Burnable**: Allows token holders to destroy their tokens.
- **Pausable**: Enables the owner to halt all token transfers temporarily.
- **Permit**: Allows approvals to be made via signatures, enabling gasless transactions.
- **Votes**: Facilitates voting mechanisms for decentralized governance.
- **Ownable**: Ownership control to manage specific administrative functions.

## Contract Details

### Constructor

The constructor initializes the token with the following parameters:

- `initialOwner`: The address of the initial owner of the contract. This owner has special privileges such as pausing/unpausing the contract and managing ownership.

```solidity
constructor(address initialOwner) ERC20("Xraders", "XR") ERC20Permit("Xraders") Ownable(initialOwner) {
    _mint(msg.sender, 100000000 * 10 ** decimals());
}
```
