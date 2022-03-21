import React from 'react'

export default function Grade({weaponObject}) {

  return (
    <div className="gradeDiv">
        Grade: {weaponObject.meta.attributes[2].value}
        Upgrades: {weaponObject.meta.attributes[3].value}
    </div>
  )
}
