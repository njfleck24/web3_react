import React from 'react'
import Grade from './Grade';
import SVG from './SVG';
export default function ItemCard({upgradeState}) {
  let gradeStr = ""
  try{
  if(upgradeState.meta.attributes[2].value === 1){
    gradeStr = "grade-1"
  }  else if (upgradeState.meta.attributes[2].value === 2){
    gradeStr = "grade-2"
  }  else if (upgradeState.meta.attributes[2].value === 3){
    gradeStr = "grade-3"
  }
  }catch {

  }
  try{
    return (
      <div className={`itemCard ${gradeStr}`}>
              <div className="itemRow"><p>{upgradeState.meta.name}</p></div>
              {<SVG weaponObject={upgradeState}/>}
              {<Grade weaponObject={upgradeState}/>}
              
              <div className="itemRow"><p>Damage:</p><p>{upgradeState.meta.attributes[0].value}+{upgradeState.meta.attributes[5].value}</p></div>
              <div className="itemRow"><p>Crit:</p><p>{upgradeState.meta.attributes[2].value}+{upgradeState.meta.attributes[4].value}</p></div>
              <div className="itemRow"><p>Parry:</p><p>{upgradeState.meta.attributes[1].value}+{upgradeState.meta.attributes[6].value}</p></div>
              
              <div className="itemRow"><p>Id:</p><p>{upgradeState.id}</p></div>    
      </div>
    )
  }catch{
    return (
      <div className='itemCard'>
              <div className="itemRow"><p>Select Item To Upgrade</p></div>   
      </div>
    )
  }

}
