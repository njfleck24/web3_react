import React from 'react'
import { useMoralis } from 'react-moralis';
import "./InventoryBox.css"
import Grade from './Grade';
import SVG from './SVG';
export default function InventoryBox({setUpgradeState, whitelistAddy, weaponState} ){
    const { Moralis } = useMoralis();

    console.log(weaponState)

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
        {weaponState !== [] && weaponState.map( (weaponObject,index) => {
          try{return <div key={index} className='weaponCard'>
            {<Grade weaponObject={weaponObject}/>}
            {<SVG weaponObject={weaponObject}/>}
            <div className="itemRow"><p>Name:</p><p>{weaponObject.meta.name}</p></div>
            <div className="itemRow"><p>Damage:</p><p>{weaponObject.meta.attributes[0].value}+{weaponObject.meta.attributes[5].value}</p></div>
            <div className="itemRow"><p>Parry:</p><p>{weaponObject.meta.attributes[1].value}+{weaponObject.meta.attributes[6].value}</p></div>
            <div className="itemRow"><p>Crit:</p><p>{weaponObject.meta.attributes[2].value}+{weaponObject.meta.attributes[4].value}</p></div>
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
