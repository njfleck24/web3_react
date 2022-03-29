import React, {useState} from 'react'

export default function UpgradeInput({statState,upgradeState, whitelistAddy, Moralis}) {
    const [inputState1, setInputState1] = useState(false)
    const [inputState2, setInputState2] = useState(false)
    const upgradeFunction = async (input1,input2) =>{

        const options = {abi:[{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"input1","type":"uint256"},{"internalType":"uint256","name":"input2","type":"uint256"},{"internalType":"uint256","name":"stat","type":"uint256"}],"name":"lowLevelUpgrade","outputs":[],"stateMutability":"nonpayable","type":"function"}],
        contractAddress: whitelistAddy,
        functionName: "lowLevelUpgrade",
          params:{"id":upgradeState.id,"input1":input1,"input2":input2,"stat":statState
          },msgValue:0}
          await Moralis.executeFunction(options)

        
    }
        return (
        <div className='inputDiv'>
            <button className={inputState1 ? 'inputBTN current' : 'inputBTN'} onClick={()=>{setInputState1(!inputState1)}}></button>
            <button className={inputState2 ? 'inputBTN current' : 'inputBTN'} onClick={()=>{setInputState2(!inputState2)}}></button>
            <button className="statBTN" onClick={()=>{
                let input1 = inputState1 ? 1: 0
                let input2 = inputState2 ? 1: 0
                
                upgradeFunction(input1,input2,0,0)}}>Upgrade</button>
        </div>
      ); 
    
  
}
