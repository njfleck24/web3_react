import React from 'react'

export default function Cases({caseList}) {
    console.log(caseList)
  return (
    <div>Cases
        <button onClick={()=>{console.log(caseList)}}>BUTTTON</button>
    </div>
  )
}
