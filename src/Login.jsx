import React from 'react'
import './Login.css'
import { useMoralis } from 'react-moralis';
export default function Login() {
    const { authenticate } = useMoralis();


  return (
    <div className='loginBody'>
        <button id='loginBtn' onClick={authenticate}>Enter Arkade</button>
        <div className="loginDesc">
            To enter Andy's Arkade you must connect your MetaMask wallet.

        </div>
        
    </div>
  )
}
