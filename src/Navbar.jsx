import React, {useEffect, useState} from "react";
import './Navbar.css';
import { ConnectButton } from 'web3uikit';
import { useMoralis, useERC20Balances } from "react-moralis";
import AccountModal from "./AccountModal"
export default function Navbar({whitelistAddy, playerCard,Moralis,playerState, getPlayerCard, arkade}) {
  const { account } = useMoralis()
  const { data: assets } = useERC20Balances();
  useEffect(async () =>{console.log(assets)}, [])
  const [profileModal, setProfileModal] = useState(false)

  return (
    <div className='navbar'>
      <div className='arkadeTokens'>
        <p>Arkade Tokens</p>
      {assets && assets.map( (asset, index) => {
        if (asset.token_address === arkade.toLowerCase()){
          return <div key={index}>{asset.balance / 10 ** 18}</div>
        } else {
          return <div key={index}></div>
        }
      })}
      
    
      </div>
      <div className='currentAddy'>
      <h1 className="linear-wipe">Andy's Arkade
        </h1>
        <p>Current Address:</p><p> {account}</p>
      </div>
      <div id="authBox" className='auth'>
      <button onClick={ async () => {
        if(!profileModal){await getPlayerCard();}
          setProfileModal(!profileModal)
        
      }}>Account Profile</button>
      {profileModal && <AccountModal whitelistAddy={whitelistAddy} profileModal={profileModal} playerCard={playerCard} account={account} Moralis={Moralis} playerState={playerState}/>}
      </div>

        
    </div>
  )
}
