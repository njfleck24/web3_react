import React from 'react'

export default function SVG({weaponObject}) {
    if (weaponObject.meta.name === "Lazer Sword"){
        return <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="68" height="68" fill="#C2C2C2"/>
        <path d="M50 46.5L45.7333 50L43.8667 47.75L42 45.5L46.2667 42L48.1333 44.25L50 46.5Z" fill="#381B00"/>
        <path d="M48.1333 44.25L50 46.5L45.7333 50L43.8667 47.75M48.1333 44.25L46.2667 42L42 45.5L43.8667 47.75M48.1333 44.25L43.8667 47.75" stroke="#772C02" strokeWidth="0.2"/>
        <path d="M44 51L45.5 50L50 46.5L51 45L53.5 44.5L59 47L53.5 46L52 47.5L46.5 52L44.5 53L45 58.5L42.5 53.5L44 51Z" fill="#E8FF8A" stroke="#40EB70" strokeWidth="0.5"/>
        <path d="M23 11.5L16.5 10.5V16.5L37 40L40.5 36.5L23 11.5Z" fill="#FF5B5B" stroke="#FF0202"/>
        <path d="M43 37.5L41 36.5L37 40.5L37.5 42L34.5 44H29L28.5 47L33.5 49L42 46.5L47 42L50.5 34L48 30H45.5L45 35L43 37.5Z" fill="#E8FF8A" stroke="#40EB70" strokeWidth="0.4"/>
        <path d="M35 45.5H31L34 47.5L40.5 45.5L46.5 40L48.5 34L47 32L46.5 35L43 39L39.5 39.5V42L35 45.5Z" fill="black" stroke="#00FE47" strokeWidth="0.4"/>
        <path d="M22.375 12.6667L18 12L23 16L22.375 12.6667Z" fill="#FF0000"/>
        <path d="M37 38.5L18.5 17.5L38 37L37 38.5Z" fill="#FF2E00"/>
        <path d="M37 37L36.5 37.5L25.5 25L37 37Z" fill="#760700" fillOpacity="0.77"/>
        </svg>
        
      
    }else if (weaponObject.meta.name === "Blood Axe"){
        return <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="50" fill="#C4C4C4"/>
        <path d="M9 22.5L17.5 11.5L36 5.5L43 27.5L23 39.5L9 22.5Z" fill="#FF1A1A" stroke="black"/>
        <path d="M17 40L12 6L47 14L17 40Z" fill="#480000" stroke="black"/>
        </svg>
        
    }else if (weaponObject.meta.name === "Doom Scythe"){
      return <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="68" height="68" fill="#C2C2C2"/>
      </svg>
      
      
      
  }
    else {
        return (
    <div>SVG</div>
  )
    }
  
}
