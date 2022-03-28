import './App.css';
import React, {useEffect, useState} from "react";
import Info from './Info';
import { useMoralis } from 'react-moralis';
import Load from './Load';
//{Moralis && <Home  account={account} Moralis={Moralis} logout={logout}/>}</>
const App = () => {
  const {
    account,
    isAuthenticated,
    logout,
    authenticate,
    Moralis,
} = useMoralis();

  if (!isAuthenticated) {
    return (
    <div className="mainPage">
        <div className="tabs">
          What is Andy's Arkade?
          <button onClick={()=>{authenticate()}}>Login</button>
        </div>
      <div className="content">
        <Info />
      </div>


    </div>
  )
  } else {
    return (
      <>
      {Moralis && <Load account={account} Moralis={Moralis} logout={logout}/>}</>
      
    )
  }
  
}

export default App;
