import React from 'react'

export default function AffiliateCode({playerCard, account, Moralis}) {
  return (
    <div className='setAffiliateBox'>
        <input id="affInput" ></input>
        <button onClick={ async () => {
            let affInput = document.getElementById("affInput")
            affInput = affInput.value
            let setAffOptions = {abi:[{"inputs":[{"internalType":"address","name":"aff","type":"address"}],"name":"setAffiliate","outputs":[],"stateMutability":"nonpayable","type":"function"}],
      contractAddress: playerCard,
      functionName: "setAffiliate",
        params:{"aff":affInput
        },msgValue:0}
        console.log(affInput)
        await Moralis.executeFunction(setAffOptions)
        }}>SET</button>
    </div>
  )
}
