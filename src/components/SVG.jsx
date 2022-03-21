import React from 'react'

export default function SVG({weaponObject}) {
    if (weaponObject.meta.name === "Lazer Sword"){
        return <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 50 50">
        <path fill="#C4C4C4" d="M0 0h50v50H0z"/>
        <path fill="#FF1A1A" stroke="#000" d="M9 22.5l8.5-11 18.5-6 7 22-20 12-14-17z"/>
      </svg>
      
    }else if (weaponObject.meta.name === "Blood Axe"){
        return <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="50" fill="#C4C4C4"/>
        <path d="M9 22.5L17.5 11.5L36 5.5L43 27.5L23 39.5L9 22.5Z" fill="#FF1A1A" stroke="black"/>
        <path d="M17 40L12 6L47 14L17 40Z" fill="#480000" stroke="black"/>
        </svg>
        
    }
    else {
        return (
    <div>SVG</div>
  )
    }
  
}
