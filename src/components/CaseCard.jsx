import React from 'react'

export default function CaseCard({caseObj, changeModalState}) {
  return (
    <div className='case'>
      <h2>Name: {caseObj.name}</h2>
      <h2>Cost: {caseObj.cost}</h2>
      <button id={caseObj.name} onClick={(e) =>{console.log(e.currentTarget.id); changeModalState({id:e.currentTarget.id, addy:caseObj.address, cost:caseObj.cost})}}>Open Case</button>
    </div>
  )
}
