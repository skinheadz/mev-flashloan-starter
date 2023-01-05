import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import deployer from './.secret'; //Alternative to .env file

//https://chainlist.org/
const POL_RPC = 'https://polygon.llamarpc.com';
const GOERLI_RPC = 'https://eth-goerli.public.blastapi.io'
const Private_RPC = 'http://127.0.0.1:8545/';
//List of RPC's shall be extended. Run private node:
//npx hardhat node --fork 'https://eth-goerli.public.blastapi.io'
//npx hardhat run --network goerli scripts/deploy.ts

const config: HardhatUserConfig = {
  solidity: "0.8.10",
  networks: {
    private: {
      url: Private_RPC,
      chainId: 31337,
      accounts: [deployer.private],
    },
    goerli: {
      url: GOERLI_RPC,
      chainId: 5,
      accounts: [deployer.private],
    },
  },
}
export default config;
