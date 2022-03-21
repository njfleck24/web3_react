import React from 'react'
import './MarketBox.css'
import { useMoralis } from 'react-moralis';
import CaseModal from './CaseModal';
import { useState } from 'react'
import CaseCard from './CaseCard';
import Cases from './Cases';
export default function MarketBox({whitelistAddy, account, casesState}) {
  const [modalState, changeModalState] = useState(false)

  
  const { Moralis } = useMoralis();



  let caseDiv = casesState.map( (caseObj,index) => (<CaseCard key={index } changeModalState={changeModalState} caseObj={caseObj}/>))
  return (
    <div className='casesDiv'>
      {caseDiv}
      {modalState && <CaseModal whitelistAddy={whitelistAddy} account={account} casesState={casesState} modalState={modalState} Moralis={Moralis} closeModal={changeModalState}/>}
    </div>
  )
}
