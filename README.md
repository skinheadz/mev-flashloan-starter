# MEV FlashLoan Starter

This project demonstrates a basic Hardhat use case. It comes with a sample contract, and a script that deploys that contract.

This repo is written only for POC. The contract is simple and does not contain any arbitrage or swap logic. It is written as a starting kit for your own implementations. Such as liquidation, or arbitrage bot. Since it uses AAVE_V3, IT DOES NOT SUPPORT ETH Mainnet. 
(use v2 for that, you won't be able to do anything on eth anyways, thanks to mempool [🥪)](https://calblockchain.mirror.xyz/c56CHOu-Wow_50qPp2Wlg0rhUvdz1HLbGSUWlB_KX9o)


## :angel:
A flash loan starter contract can be used to borrow money for single transaction from AAVE V3 for networks:
Polygon, Optimism, Arbitrum, Harmony, Fantom, Avalanche.

## [Fork](https://github.com/skinheadz/mev-flashloan-starter/fork) project
```bash
git clone https://github.com/skinheadz/mev-flashloan-starter.git
cd mev-flashloan-starter
npm install
```


## Deploy the contract
1. Edit network config in `hardhat.config.ts`.

2. Copy and edit the secret(env) sample config：

```bash
$ cp .secret.ts.sample .secret.ts
```

3. Then run the script to deploy.  If you wanna deploy to specific network, specify it when running. You may need to change the network settings in `hardhat.config.ts`.


For example,

```bash
$ npx hardhat node --fork 'https://eth-goerli.public.blastapi.io' --show-stack-traces
$ npx hardhat --network private run scripts/deploy.ts
```
or 
```bash
$ npx hardhat --network goerli run scripts/deploy.ts
```

## Bot functions implementation

The contract has a function `executeOperation`, which will be run by Lending Protocol. Here you specify your custom logic with borrowed funds.

The bot need to call `requestFlashLoan(token, amount)` to get the requested token with requested amount as a loan.

Contract owner can call `withdraw()` to withdraw the profit.

## Remix Instructions:

1. Copy and paste FlashLoan.sol into remix.
2. Compile
3. Choose Metamask as provider.
4. Input Deployed contract address
5. Run requestFlashLoan(token, amount)


sample flashloan tx on goerli:
'https://goerli.etherscan.io/tx/0x103f4c7548e3992e8eb171c77e39a13ec9582a82b1dbd1bdceabd15e9129ac8f'

goerli faucets:
'https://goerli-faucet.pk910.de/'
'https://staging.aave.com/faucet/'

<img width="566" alt="Screen Shot 2023-01-05 at 1 16 53 PM" src="https://user-images.githubusercontent.com/113230343/210883514-8231d0c7-d6f3-4614-b024-077f69f8add1.png">

## Resources

[Flashloan with Aave V3 - detailed description of protocol](https://link.medium.com/lHRUvcryYqb)
