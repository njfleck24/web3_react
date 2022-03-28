import React from 'react'

export default function UpgradeInput({setUpgradeState,statState,upgradeState, whitelistAddy, Moralis}) {

    const upgradeFunction = async (input1,input2) =>{

        const options = {abi:[{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"input1","type":"uint256"},{"internalType":"uint256","name":"input2","type":"uint256"},{"internalType":"uint256","name":"stat","type":"uint256"}],"name":"lowLevelUpgrade","outputs":[],"stateMutability":"nonpayable","type":"function"}],
        contractAddress: whitelistAddy,
        functionName: "lowLevelUpgrade",
          params:{"id":upgradeState.id,"input1":input1,"input2":input2,"stat":statState
          },msgValue:0}
          await Moralis.executeFunction(options)
          setUpgradeState(false)
        
    }
        return (
        <div className='inputDiv'>
            <input className='input1' type="checkbox"></input>
            <input className='input2' type="checkbox"></input>
            <button onClick={()=>{
                let input1 = document.getElementsByClassName("input1")[0]
                let input2 = document.getElementsByClassName("input2")[0]
                input1 = input1.checked ? 1: 0
                input2 = input2.checked ? 1: 0
                
                upgradeFunction(input1,input2,0,0)}}>Upgrade</button>
        </div>
      ); 
    
  
}
