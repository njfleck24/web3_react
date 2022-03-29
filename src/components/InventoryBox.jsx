import React, {useState} from 'react'
import { useMoralis } from 'react-moralis';
import "./InventoryBox.css"
import Grade from './Grade';
import SVG from './SVG';
import Upgraded from './Upgraded';
import ItemCard from './ItemCard';
import UpgradeInput from './../UpgradeInput';
export default function InventoryBox({upgradeState,Moralis,setUpgradeState, whitelistAddy, weaponState} ){


  const [statState, setStatState] = useState(0)
  const [activeUpgradeState, setActiveUpgradeState] = useState(false)
  const [gradeState, setGradeState] = useState(null)
    return (
    <div className="weaponDiv">
      <div className="upgradeDiv">
      <div className="upgradeBox">
          <ItemCard upgradeState={upgradeState}/>

        <div className="upgradeButtons">
          {!activeUpgradeState && <UpgradeInput statState={statState} upgradeState={upgradeState} whitelistAddy={whitelistAddy} Moralis={Moralis}/>}
          {!activeUpgradeState && <button onClick={() => {setStatState(0)}} className={statState == 0 ? "current statBTN" : "statBTN" }>Damage</button>}
          {!activeUpgradeState && <button onClick={() => {setStatState(1)}} className={statState == 1 ? "current statBTN" : "statBTN" }>Crit</button>}
          {!activeUpgradeState && <button onClick={() => {setStatState(2)}} className={statState == 2 ? "current statBTN" : "statBTN" }>Parry</button>}
          {activeUpgradeState && <Upgraded upgradeState={upgradeState} gradeState={gradeState} />}
          <button onClick={() => {upgradeState ? setActiveUpgradeState(!activeUpgradeState) : console.log("select item first")}} className={activeUpgradeState == true ? "current statBTN" : "statBTN" }><svg width="193" height="81" viewBox="0 0 193 81" fill={activeUpgradeState == true ?  "#2203E2" : "#070032" } xmlns="http://www.w3.org/2000/svg">
<path d="M3 55.8965V31.069H116.083V5L187 42.5517L116.083 77V55.8965H3Z" stroke="#01002D" stroke-width="5"/>
</svg>

</button>
        </div>

        {!activeUpgradeState ? <ItemCard upgradeState={null}/> : <ItemCard upgradeState={gradeState}/>}
        

      </div>
      <div className="upgradeButton">
        {activeUpgradeState && <button className="statBTN" onClick={ async () =>{
          const id1 = upgradeState.id
          const id2 = gradeState.id
          const options = {abi:[{"inputs":[{"internalType":"uint256","name":"id1","type":"uint256"},{"internalType":"uint256","name":"id2","type":"uint256"}],"name":"gradeUpgrade","outputs":[],"stateMutability":"nonpayable","type":"function"}],
          contractAddress: whitelistAddy,
          functionName:"gradeUpgrade",
        params:{
          id1: parseInt(id1),
          id2: parseInt(id2)
        },msgValue:0}
        await Moralis.executeFunction(options);
        
        }}>Increase Grade</button>}
      </div></div>
      
      
        {weaponState !== [] && weaponState.map( (weaponObject,index) => {
            let gradeStr = ""
            if(weaponObject.meta.attributes[2].value === 1){
              gradeStr = "grade-1"
            }  else if (weaponObject.meta.attributes[2].value === 2){
              gradeStr = "grade-2"
            }  else if (weaponObject.meta.attributes[2].value === 3){
              gradeStr = "grade-3"
            }
          try{return <div key={index} className={`weaponCard ${gradeStr}`}>
            <div className="itemRow"><p>{weaponObject.meta.name}</p></div>
            {<SVG weaponObject={weaponObject}/>}
            {<Grade weaponObject={weaponObject}/>}
            
            <div className="itemRow"><p>Damage:</p><p>{weaponObject.meta.attributes[0].value}+{weaponObject.meta.attributes[5].value}</p></div>
            <div className="itemRow"><p>Crit:</p><p>{weaponObject.meta.attributes[2].value}+{weaponObject.meta.attributes[4].value}</p></div>
            <div className="itemRow"><p>Parry:</p><p>{weaponObject.meta.attributes[1].value}+{weaponObject.meta.attributes[6].value}</p></div>
            
            <div className="itemRow"><p>Id:</p><p>{weaponObject.id}</p></div>
        <button  onClick={(e) => {
          if(!activeUpgradeState){
            setUpgradeState({id:weaponObject.id,meta:weaponObject.meta})
          } else{
            setGradeState({id:weaponObject.id,meta:weaponObject.meta})
          }
          
          }} >Upgrade</button>
        </div>
        } catch{
          return <></>
        }
          
      
      })}
    </div>
  )
}
