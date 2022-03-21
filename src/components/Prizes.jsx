import React from 'react'

export default function Prizes( {data}) {

  return (
    <div className='prizeDiv'>
        <div className="title" id="titleRow">
            <p>Prize Name</p>
            <p>Damage</p>
            <p>Crit</p>
            <p>Parry</p>
            <p>Ticket Range</p>
        </div>
        {data.map( (prize,index) => {
            return (
            <div className="title" key={index}>
                <p>{prize.name}</p>
                <p>{prize.damage}</p>
                <p>{prize.crit}</p>
                <p>{prize.parry}</p>
                <p>{prize.lowticket} - {prize.highticket}</p>
            </div>
            )
        })}
    </div>
  )
}
