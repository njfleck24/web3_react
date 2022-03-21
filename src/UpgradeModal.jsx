import React, {useEffect, useState} from 'react'
import UpgradeInput from './UpgradeInput';
export default function UpgradeModal({whitelistAddy, Moralis, upgradeState,setUpgradeState}) {
  const [upgradeType, setUpgradeType] = useState(1)
  return (
    <div className='upgrademodal'>
      <div className="closeButton"><button onClick={ () => { setUpgradeState(false)}}>X</button></div>
        
        <div className="nameContent">
          Name: {  upgradeState.meta.name}
        </div>
          <div className="upgradeContent">
            Damage {  upgradeState.meta.attributes[0].value}<br></br>
            Crit {  upgradeState.meta.attributes[2].value}<br></br>
            Parry {  upgradeState.meta.attributes[1].value}
          </div>
          <div className="upgradeButtons">
            <button onClick={()=>{setUpgradeType(1)}}>Low</button>
            <button onClick={()=>{setUpgradeType(2)}}>Mid</button>
            <button onClick={()=>{setUpgradeType(3)}}>High</button>
          </div>
          <UpgradeInput upgradeState={upgradeState} whitelistAddy={whitelistAddy} Moralis={Moralis} upgradeType={upgradeType}/>
        </div>
  )
}
