// SPDX-License-Identifier: DO WHATEVER THE FUCK YOU WANT License
//Starter kit contract we got the funds, write your own logic and call request flashloan.
pragma solidity ^0.8.10;
pragma abicoder v2;

//these are for Remix:
// import {FlashLoanSimpleReceiverBase} from "https://github.com/aave/aave-v3-core/blob/master/contracts/flashloan/base/FlashLoanSimpleReceiverBase.sol";
// import {IPoolAddressesProvider} from "https://github.com/aave/aave-v3-core/blob/master/contracts/interfaces/IPoolAddressesProvider.sol";
// import {IERC20} from "https://github.com/aave/aave-v3-core/blob/master/contracts/dependencies/openzeppelin/contracts/IERC20.sol";
// // import {UniswapV2Router02} from "https://github.com/sushiswap/sushiswap/blob/master/protocols/sushiswap/contracts/interfaces/IUniswapV2Router02.sol"

//These are for Hardhat
import {FlashLoanSimpleReceiverBase} from "@aave/core-v3/contracts/flashloan/base/FlashLoanSimpleReceiverBase.sol";
import {IPoolAddressesProvider} from "@aave/core-v3/contracts/interfaces/IPoolAddressesProvider.sol";
import {IERC20} from "@aave/core-v3/contracts/dependencies/openzeppelin/contracts/IERC20.sol";
// import {ISwapRouter} from "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";
// import {IUniswapV2Router02} from "@sushiswap/sushiswap/contracts/interfaces/IUniswapV2Router02.sol";



contract FlashLoan is FlashLoanSimpleReceiverBase {
    address payable owner;
   constructor(address _addressProvider) 
        FlashLoanSimpleReceiverBase(IPoolAddressesProvider(_addressProvider))
    {
        owner = payable(msg.sender);
    }

    function executeOperation(
    address asset,
    uint256 amount,
    uint256 premium,
    address initiator,
    bytes calldata params
  ) external override returns (bool) {

    //HERE YOU CAN CALL WHATEVER LOGIC WITH CONTRACT IN Solidity

    // we have the borrowed funds
    uint256 amountOwed = amount + premium;
    IERC20(asset).approve(address(POOL), amountOwed);
    return true;
    //flash loan returned
  }

//        (GOERLI: DAI)
// 0x75Ab5AB1Eef154C0352Fc31D2428Cef80C7F8B33, 1000000 (GOERLI: DAI)
  function requestFlashLoan(address _token, uint256 _amount) public {
    address receiverAddress = address(this);
    address asset = _token;
    uint256 amount = _amount;
    bytes memory params = "";
    uint16 referralCode = 0;

    POOL.flashLoanSimple(
     receiverAddress,
     asset,
     amount,
     params,
     referralCode
     );
  }
// of 0x75Ab5AB1Eef154C0352Fc31D2428Cef80C7F8B33 (GOERLI DAI)
// of 0xA2025B15a1757311bfD68cb14eaeFCc237AF5b43 (GOERLI USDC)
    function getBalance(address _tokenAddress) external view returns (uint256) {
        return IERC20(_tokenAddress).balanceOf(address(this));
    }

    function withdraw(address _tokenAddress) external onlyOwner {
        IERC20 token = IERC20(_tokenAddress);
        token.transfer(msg.sender, token.balanceOf(address(this)));
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }
    receive() external payable {}
} 

