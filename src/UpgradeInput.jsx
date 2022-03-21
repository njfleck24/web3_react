import React from 'react'

export default function UpgradeInput({upgradeState, whitelistAddy, Moralis, upgradeType}) {
    const upgradeFunction = async (input1,input2,input3,input4) =>{
        const stat = 0;
        if(upgradeType === 1){
            const options = {abi:[{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"input1","type":"uint256"},{"internalType":"uint256","name":"input2","type":"uint256"},{"internalType":"uint256","name":"stat","type":"uint256"}],"name":"lowLevelUpgrade","outputs":[],"stateMutability":"nonpayable","type":"function"}],
        contractAddress: whitelistAddy,
        functionName: "lowLevelUpgrade",
          params:{"id":upgradeState.id,"input1":parseInt(input1),"input2":parseInt(input2),"stat":parseInt(stat)
          },msgValue:0}
          await Moralis.executeFunction(options)
        }
        
    }
    if(upgradeType === 1){
        return (
        <div className='inputDiv'>
            <input className='input1'></input>
            <input className='input2'></input>
            <button onClick={()=>{
                let input1 = document.getElementsByClassName("input1")[0]
                let input2 = document.getElementsByClassName("input2")[0]
                input1 = input1.value
                input2 = input2.value
                
                upgradeFunction(input1,input2,0,0)}}>Upgrade</button>
        </div>
      ); 
    } else if(upgradeType === 2) {
        return (
            <div className='inputDiv'>
            <input className='input1'></input>
            <input className='input2'></input>
            <input className='input3'></input>
            <button onClick={()=>{
                let input1 = document.getElementsByClassName("input1")[0]
                let input2 = document.getElementsByClassName("input2")[0]
                let input3 = document.getElementsByClassName("input3")[0]
                input1 = input1.value
                input2 = input2.value
                input3 = input3.value
                upgradeFunction(input1,input2,input3,0)}}>Upgrade</button>
            </div>
          )
    } else if(upgradeType === 3) {
        return (
            <div className='inputDiv'>
            <input className='input1'></input>
            <input className='input2'></input>
            <input className='input3'></input>
            <input className='input4'></input>
            <button onClick={()=>{
                let input1 = document.getElementsByClassName("input1")[0]
                let input2 = document.getElementsByClassName("input2")[0]
                let input3 = document.getElementsByClassName("input3")[0]
                let input4 = document.getElementsByClassName("input4")[0]
                input1 = input1.value
                input2 = input2.value
                input3 = input3.value
                input4 = input4.value
                upgradeFunction(input1,input2,input3,input4)}}>Upgrade</button>
            </div>
          )
    } 
  
}
