import React from 'react'
import { useMoralis } from 'react-moralis';
import "./InventoryBox.css"
import Grade from './Grade';
import SVG from './SVG';
export default function InventoryBox({upgradeState,Moralis,setUpgradeState, whitelistAddy, weaponState} ){


  async function upgrade(id){
    const options = {abi:[{"inputs":[{"internalType":"uint256","name":"weaponId","type":"uint256"}],"name":"upgradeWeapon","outputs":[],"stateMutability":"nonpayable","type":"function"}],
              contractAddress: whitelistAddy,
              functionName:"upgradeWeapon",
            params:{
              weaponId: id
            },msgValue:0}
    await Moralis.executeFunction(options);

  }

    return (
    <div className="weaponDiv">
      <div className="upgradeBox">
        <div className="upgradeItem1"></div>
        <div className="upgradeButtons">
          <button onClick={()=>{console.log(upgradeState)}}>Test</button>
        </div>
        <div className="upgradeItem2"></div>
      </div>
      <div className="upgradeButton">
        <input id="id1"></input>
        <input id="id2"></input>
        <button onClick={ async () =>{
          const id1 = document.getElementById("id1").value
          const id2 = document.getElementById("id2").value
          const options = {abi:[{"inputs":[{"internalType":"uint256","name":"id1","type":"uint256"},{"internalType":"uint256","name":"id2","type":"uint256"}],"name":"gradeUpgrade","outputs":[],"stateMutability":"nonpayable","type":"function"}],
          contractAddress: whitelistAddy,
          functionName:"gradeUpgrade",
        params:{
          id1: parseInt(id1),
          id2: parseInt(id2)
        },msgValue:0}
        await Moralis.executeFunction(options);
        
        }}>Increase Grade</button>
      </div>
      
      
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
        <button  onClick={(e) => {setUpgradeState({id:weaponObject.id,meta:weaponObject.meta})}} >Upgrade</button>
        </div>
        } catch{
          return <></>
        }
          
      
      })}
    </div>
  )
}
