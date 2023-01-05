const hre = require("hardhat");

async function main() {
    //Instantiate FlashLoan.sol
    const FlashLoan = await hre.ethers.getContractFactory("FlashLoan");
    //https://docs.aave.com/developers/deployed-contracts/v3-testnet-addresses
    //GOERLI: │       PoolAddressesProvider-Aave        │ '0xc4dCB5126a3AfEd129BC3668Ea19285A9f56D15D' │
    //POLYGON: | PoolAddressesProvider                  | 0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb │
    const poolAddress = "0xc4dCB5126a3AfEd129BC3668Ea19285A9f56D15D";
    const token = "0x9FD21bE27A2B059a288229361E2fA632D8D2d074"  //(GOERLI WETH)   token to borrow from pool

    //perform checks
    //Deploying contract with specified chain aave pool address as input.
    const flashLoan = await FlashLoan.deploy(poolAddress);
  
    await flashLoan.deployed();
     console.log("Flash loan contract deployed: ", flashLoan.address, "\nPlease head to remix.ethereum.org for test. Or use hardhat");
    //If you are on remix you can already interact with contract and testnet
    //You can try calling requestFlashLoan('0xA2025B15a1757311bfD68cb14eaeFCc237AF5b43, 1000000) 

    //HERE YOU CAN CALL WHATEVER LOGIC WITH CONTRACT in Javascript
    console.log("balance on deploy: ", await flashLoan.getBalance(token), "\n");



    // for hardhat simulation here are some instructions to send some tokens into contract and perform an example Flash Loan:

//     // npx hardhat run --network private scripts/deploy.ts
//     //   //here I get address from
//     const impersonatedSigner = await hre.ethers.getImpersonatedSigner("0xA6E54EF4eC6c7eB89099F3F9af42A64f76e10920"); //your address 


//     const ERC20ABI = [{
// "constant": true,
// "inputs": [],
// "name": "name",
// "outputs": [
//     {
//         "name": "",
//         "type": "string"
//     }
// ],
// "payable": false,
// "stateMutability": "view",
// "type": "function"
// },{
// "constant": false,
// "inputs": [
//     {
//         "name": "_spender",
//         "type": "address"
//     },
//     {
//         "name": "_value",
//         "type": "uint256"
//     }
// ],
// "name": "approve",
// "outputs": [
//     {
//         "name": "",
//         "type": "bool"
//     }
// ],
// "payable": false,
// "stateMutability": "nonpayable",
// "type": "function"
// },{
// "constant": true,
// "inputs": [],
// "name": "totalSupply",
// "outputs": [
//     {
//         "name": "",
//         "type": "uint256"
//     }
// ],
// "payable": false,
// "stateMutability": "view",
// "type": "function"
// },{
// "constant": false,
// "inputs": [
//     {
//         "name": "_from",
//         "type": "address"
//     },
//     {
//         "name": "_to",
//         "type": "address"
//     },
//     {
//         "name": "_value",
//         "type": "uint256"
//     }
// ],
// "name": "transferFrom",
// "outputs": [
//     {
//         "name": "",
//         "type": "bool"
//     }
// ],
// "payable": false,
// "stateMutability": "nonpayable",
// "type": "function"
// },{
// "constant": true,
// "inputs": [],
// "name": "decimals",
// "outputs": [
//     {
//         "name": "",
//         "type": "uint8"
//     }
// ],
// "payable": false,
// "stateMutability": "view",
// "type": "function"
// },{
// "constant": true,
// "inputs": [
//     {
//         "name": "_owner",
//         "type": "address"
//     }
// ],
// "name": "balanceOf",
// "outputs": [
//     {
//         "name": "balance",
//         "type": "uint256"
//     }
// ],
// "payable": false,
// "stateMutability": "view",
// "type": "function"
// },{
// "constant": true,
// "inputs": [],
// "name": "symbol",
// "outputs": [
//     {
//         "name": "",
//         "type": "string"
//     }
// ],
// "payable": false,
// "stateMutability": "view",
// "type": "function"
// },{
// "constant": false,
// "inputs": [
//     {
//         "name": "_to",
//         "type": "address"
//     },
//     {
//         "name": "_value",
//         "type": "uint256"
//     }
// ],
// "name": "transfer",
// "outputs": [
//     {
//         "name": "",
//         "type": "bool"
//     }
// ],
// "payable": false,
// "stateMutability": "nonpayable",
// "type": "function"
// },{
// "constant": true,
// "inputs": [
//     {
//         "name": "_owner",
//         "type": "address"
//     },
//     {
//         "name": "_spender",
//         "type": "address"
//     }
// ],
// "name": "allowance",
// "outputs": [
//     {
//         "name": "",
//         "type": "uint256"
//     }
// ],
// "payable": false,
// "stateMutability": "view",
// "type": "function"
// },{
// "payable": true,
// "stateMutability": "payable",
// "type": "fallback"
// },{
// "anonymous": false,
// "inputs": [
//     {
//         "indexed": true,
//         "name": "owner",
//         "type": "address"
//     },
//     {
//         "indexed": true,
//         "name": "spender",
//         "type": "address"
//     },
//     {
//         "indexed": false,
//         "name": "value",
//         "type": "uint256"
//     }
// ],
// "name": "Approval",
// "type": "event"
// },{
// "anonymous": false,
// "inputs": [
//     {
//         "indexed": true,
//         "name": "from",
//         "type": "address"
//     },
//     {
//         "indexed": true,
//         "name": "to",
//         "type": "address"
//     },
//     {
//         "indexed": false,
//         "name": "value",
//         "type": "uint256"
//     }
// ],
// "name": "Transfer",
// "type": "event"
// }
//   ];
//     //send eth
//     const WETH = new hre.ethers.Contract(token, ERC20ABI, impersonatedSigner);
//     await WETH.approve(impersonatedSigner.address, 1000000);
//     const res = await WETH.transferFrom(impersonatedSigner.address, flashLoan.address, 10000);

    if (await flashLoan.getBalance(token) == "0") {
        console.error("not enough funds in the contract to flashloan. Remember you have to give back 0.05% of borrowed token to AAVE_V3");
        return;
    }
    console.log( await flashLoan.requestFlashLoan(token, 10000)); //(token, amount)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
     if (error.code == 'INSUFFICIENT_FUNDS') 
        console.log('lad, you dont have enough gas to perform that action')
    else if (error.code == 'UNPREDICTABLE_GAS_LIMIT')
        console.log('lad, wrong network pool address')
    else if (error.code == 'CALL_EXCEPTION') 
        console.log('lad, transaction reverted without a reason string. WRONG ADDRESS');
    else {console.error(error);
    console.log(error._isProviderError)}

  console.error("Critical Error: ", error.code);
  process.exitCode = 1;
});


//npx hardhat node --fork https://eth-goerli.public.blastapi.io
//npx hardhat run --network private scripts/deploy.js
