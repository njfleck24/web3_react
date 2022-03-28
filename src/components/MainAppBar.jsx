import React from 'react'

export default function MainAppBar({layoutState, setLayoutState}) {


    function clicked(e){
        if( layoutState[0] === e){
            setLayoutState(false)
        } else {
            setLayoutState([e])
        }
        
    }
  return (
    <div className='mainAppBar'>
        <div onClick={ () => clicked(1)}>
            Token Exchange
        </div>
        <div onClick={  () => { clicked(2)}}>
            NFT Inventory
        </div>
        <div onClick={ () => clicked(3)}>
            Loot Boxes
        </div>
    </div>
  )
}
