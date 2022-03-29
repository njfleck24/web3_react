import React from 'react'

export default function Upgraded({gradeState, upgradeState}) {
    console.log(gradeState)
    console.log(upgradeState)
    try{
        return (
            <div>
                <h2>Next Grade {gradeState.meta.attributes[2].value + 1}</h2>
                <p>Total Upgrade Damage: {gradeState.meta.attributes[5].value + upgradeState.meta.attributes[5].value}</p>
                <p>Total Upgrade Crit: {gradeState.meta.attributes[4].value + upgradeState.meta.attributes[4].value}</p>
                <p>Total Upgrade Parry: {gradeState.meta.attributes[6].value + upgradeState.meta.attributes[6].value}</p>
                
                
            </div>
          )
    }catch{
        return (
            <div>
                <h2>Select Two Items</h2>

                
                
            </div>
          )
    }

}
