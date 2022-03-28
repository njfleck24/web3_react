import React from 'react'

export default function Grade({weaponObject}) {
  let fillObj = {
    0:"none",
    1:"none",
    2:"none",
  }
  for(let i = 0;i < (weaponObject.meta.attributes[3].value - ( 3*(weaponObject.meta.attributes[2].value-1))) ; i++){
    fillObj[i] = "#FFF501"
  }
  return (
    <div className="gradeDiv">
        
        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.23776 1.92275L6 1.19098L5.76224 1.92275L4.92031 4.51393H2.19577H1.42635L2.04883 4.96619L4.25302 6.56763L3.41109 9.15881L3.17333 9.89058L3.79581 9.43832L6 7.83688L8.20419 9.43832L8.82667 9.89058L8.58891 9.15881L7.74698 6.56763L9.95117 4.96619L10.5736 4.51393H9.80423H7.07969L6.23776 1.92275Z" fill={fillObj[0]} stroke="#4B4B4B" strokeWidth="0.5"/>
</svg>

<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.23776 1.92275L6 1.19098L5.76224 1.92275L4.92031 4.51393H2.19577H1.42635L2.04883 4.96619L4.25302 6.56763L3.41109 9.15881L3.17333 9.89058L3.79581 9.43832L6 7.83688L8.20419 9.43832L8.82667 9.89058L8.58891 9.15881L7.74698 6.56763L9.95117 4.96619L10.5736 4.51393H9.80423H7.07969L6.23776 1.92275Z" fill={fillObj[1]} stroke="#4B4B4B" strokeWidth="0.5"/>
</svg>

<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.23776 1.92275L6 1.19098L5.76224 1.92275L4.92031 4.51393H2.19577H1.42635L2.04883 4.96619L4.25302 6.56763L3.41109 9.15881L3.17333 9.89058L3.79581 9.43832L6 7.83688L8.20419 9.43832L8.82667 9.89058L8.58891 9.15881L7.74698 6.56763L9.95117 4.96619L10.5736 4.51393H9.80423H7.07969L6.23776 1.92275Z" fill={fillObj[2]} stroke="#4B4B4B" strokeWidth="0.5"/>
</svg>

    </div>
  )
}
