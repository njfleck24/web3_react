import React, { useState } from 'react';
import './CaseModal.css'
import Prizes from './Prizes'
export default function caseModal({whitelistAddy, closeModal,modalState, casesState,Moralis}) {

  function loadCase(){
    let i 
    for (i=0;i<casesState.length;i++){
      if (casesState[i].name === modalState.id){
        return casesState[i].prizes
      }
    }
  }

  async function mint(){
    console.log(modalState.addy)
    console.log(whitelistAddy)
    const openOptions = {
      contractAddress: whitelistAddy,
      functionName:"openCase",
      abi:[{"inputs":[{"internalType":"address","name":"caseAddress","type":"address"}],"name":"openCase","outputs":[],"stateMutability":"nonpayable","type":"function"}],
      params: {
        caseAddress: modalState.addy
      },
      msgValue:0
    }
    
    await Moralis.executeFunction(openOptions);
    closeModal(false);
  }


  return (
    <div className="modalBackground">

      <div className="modalContainer">

          <div className="closeButton">
            <button className='close-btn' onClick={()=>closeModal(false)}>X</button>
          </div>

          <div className="title">
            <h1>{modalState.id}</h1>
          </div>

          <div className="prizes">
            <Prizes data={loadCase()}/>
          </div>
          <div>Cost: {modalState.cost}</div>

          <div className="footer">
            <button onClick={()=>closeModal(false)}>Decline</button>
            <button onClick={()=>{mint()}}>Accept</button>
          </div>

      </div>
    </div>
  )
}
