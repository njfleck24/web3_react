import React, {useEffect, useState} from 'react'
import UpgradeInput from './UpgradeInput';
export default function UpgradeModal({whitelistAddy, Moralis, upgradeState,setUpgradeState}) {
  const [statState, setStatState] = useState(0)
  return (
    <div className='upgrademodal'>
      <div className="closeButton"><button onClick={ () => { setUpgradeState(false)}}>X</button></div>
        
        <div className="nameContent">
          {  upgradeState.meta.name}
        </div>
          <div className="upgradeContent">
            Damage {  upgradeState.meta.attributes[0].value} + {  upgradeState.meta.attributes[5].value}<br></br>
            Crit {  upgradeState.meta.attributes[2].value} + {  upgradeState.meta.attributes[4].value}<br></br>
            Parry {  upgradeState.meta.attributes[1].value} + {  upgradeState.meta.attributes[6].value}
          </div>

          <UpgradeInput statState={statState} setUpgradeState={setUpgradeState} upgradeState={upgradeState} whitelistAddy={whitelistAddy} Moralis={Moralis}/>
          <div className="statButtons">
            <button onClick={() => {setStatState(0)}} className={statState == 0 ? "current" : "" }>Damage</button>
            <button onClick={() => {setStatState(1)}} className={statState == 1 ? "current" : "" }>Crit</button>
            <button onClick={() => {setStatState(2)}} className={statState == 2 ? "current" : "" }>Parry</button>
          </div>
        </div>
  )
}
