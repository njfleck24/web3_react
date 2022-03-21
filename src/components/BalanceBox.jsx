import React from 'react'
import './BalanceBox.css'
import TokenBalanceBar from './TokenBalanceBar';
export default function BalanceBox( {whitelistAddy,assets, arkade, stable, account, Moralis}) {
    const stableAddress = stable
    const arkadeAddress = arkade


    async function mint(){
      const swapText = document.getElementById("swapText");
      if (isNaN(swapText.value)){
        alert("Enter Valid Number");         
      } else {
        const options = {
          contractAddress: stableAddress,
          functionName:"mint",
          abi:[{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"}],
          params: {
            amount:Moralis.Units.ETH(swapText.value)
          },
          msgValue:0
        }
        await Moralis.executeFunction(options);
      } 
      swapText.value = "";
    }

    async function allow(){
      const swapText = document.getElementById("swapText");
      if (isNaN(swapText.value)){
        alert("Enter Valid Number");         
      } else {
        const options = {abi:[{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],
                 contractAddress: stableAddress,
                 functionName:"increaseAllowance",
                params:{
                  addedValue: Moralis.Units.Token(swapText.value, "18"),
                  spender: arkadeAddress
                },msgValue:0}
        let result = await Moralis.executeFunction(options);
      }
      swapText.value = "";
    }
    async function allowContract(){
      const swapText = document.getElementById("swapText");
      if (isNaN(swapText.value)){
        alert("Enter Valid Number");         
      } else {
        const options = {abi:[{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],
                 contractAddress: arkadeAddress,
                 functionName:"increaseAllowance",
                params:{
                  addedValue: Moralis.Units.Token(swapText.value, "18"),
                  spender: whitelistAddy
                },msgValue:0}
        let result = await Moralis.executeFunction(options);
      }
      swapText.value = "";
    }

    async function swap(){
      const swapText = document.getElementById("swapText");
      const swapDirection = document.getElementById("swapDirection");
      if (isNaN(swapText.value)){
        alert("Enter Valid Number");         
      } else {
        if (swapDirection.value === "arkade"){
        const options = {abi:[{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"}],
                 contractAddress: arkadeAddress,
                 functionName: "swap",
                params:{
                  amount: Moralis.Units.Token(swapText.value, "18")
                },msgValue:0}
        let result = await Moralis.executeFunction(options);
        } else {
          const options = {abi:[{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"swapBack","outputs":[],"stateMutability":"nonpayable","type":"function"}],
                            contractAddress: arkadeAddress,
                            functionName: "swapBack",
                            params:{
                              amount: Moralis.Units.Token(swapText.value, "18")
                            },
                            msgValue:0}
          let result = await Moralis.executeFunction(options);

        }
      }
      swapText.value = ""; 
      
    }
    return <div className="balanceDiv">
      <TokenBalanceBar whitelistAddy={whitelistAddy} assets={assets} stable={stable} arkade={arkade} Moralis={Moralis} account={account} />
    <div className="swapDiv">
      <h2>How Much to swap: </h2>
      <input id="swapText" type="text" />
      <select id="swapDirection">
        <option value="arkade">Swap to Epic Tokens</option>
        <option value="stable">Swap to Stable Coins</option>
      </select>
      <button  onClick={swap}>SWAP</button>   
      <button onClick={mint}>Mint</button>  
      <button onClick={allow}>Allow</button> 
      <button onClick={allowContract}>Allow Contract</button> 
    </div>
        
        
    </div>
}
