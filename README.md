# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

This repo is written only for POC. The contract is simple and does not contain any arbitrage or swap logic. It is written as a starting kit for your own implementations. Such as liquidation, or arbitrage bot. Since it uses AAVE_V3, IT DOES NOT SUPPORT ETH Mainnet. (use v2 for that, you won't be able to do anything on eth anyways, thanks to mempool 🥪)

# MEV FlashLoan Starter

A flash loan starter contract can be used to borrow money for single transaction from AAVE V3 for networks:
Polygon, Optimism, Arbitrum, Harmony, Fantom, Avalanche.

## Deploy the contract
1. Edit network config in `hardhat.config.ts`.

2. Copy and edit the secret(env) sample config：

```bash
$ cp .secret.ts.sample .secret.ts
```

3. Then run the script to deploy.  If you wanna deploy to specific network, specify it when running. You may need to change the network settings in `hardhat.config.ts`.

npx hardhat run --network goerli scripts/deploy.ts 


```
For example,
```
npx hardhat node --fork 'https://eth-goerli.public.blastapi.io' --show-stack-traces
$ npx hardhat --network goerli run scripts/deploy.ts
```

## Bot implementation

The contract has a function `executeOperation`, which will be run by Lending Protocol. Here you specify your custom logic with borrowed funds.

The bot need to call `requestFlashLoan(token, amount)` to get the requested token with requested amount as a loan.

Contract owner can call `withdraw()` to withdraw the profit.

##Remix Instructions:

1. Copy and paste the contract code into remix.
2. Compile
3. Choose Metamask as provider.
4. Input Deployed contract address
5. Run requestFlashLoan()


sample flashloan tx on goerli:
https://goerli.etherscan.io/tx/0x103f4c7548e3992e8eb171c77e39a13ec9582a82b1dbd1bdceabd15e9129ac8f


goerli faucets:
https://goerli-faucet.pk910.de/
https://staging.aave.com/faucet/     hit dat testnet switch button