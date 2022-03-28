import './Home.css'
import Navbar from './Navbar';
import MainAppBar from './components/MainAppBar';
import UpgradeModal from './UpgradeModal';
import BalanceBox from './components/BalanceBox';
import InventoryBox from './components/InventoryBox';
import MarketBox from './components/MarketBox';

export default function Home( {logout,Moralis,account,stable,arkade,weaponAddy,whitelistAddy,playerCard,assets,playerState,weaponState,layoutState,setLayoutState,upgradeState,setUpgradeState,casesState,getPlayerCard}) {


  
    const logOut = () => {
        logout()
    }

    async function getAccount(){
      return account
    }

   
  

  return (
    <div className='homeBody'>
      
      <Navbar playerCard={playerCard} Moralis={Moralis} playerState={playerState} whitelistAddy={whitelistAddy} getPlayerCard={getPlayerCard} arkade={arkade}/>
      <div className="bodyContent">
      <MainAppBar   setLayoutState={setLayoutState} layoutState={layoutState}/>
      {layoutState && layoutState.map( (tmp, index) => {
        if (tmp === 1 ){
          return <div className='contentDiv' key={tmp}><BalanceBox whitelistAddy={whitelistAddy} stable={stable} arkade={arkade} Moralis={Moralis} account={account} assets={assets}/></div>
        } else if (tmp === 2) {
          return <div className='contentDiv' key={tmp}><InventoryBox upgradeState={upgradeState} Moralis={Moralis} setUpgradeState={setUpgradeState} whitelistAddy={whitelistAddy} key={index} weaponState={weaponState}/></div>
        } else if ( tmp === 3){
          return <div className='contentDiv' key={tmp}><MarketBox whitelistAddy={whitelistAddy} account={account} casesState={casesState}/></div>
        }
      })
      }
        <button id="logoutBtn" onClick={logOut}>Log Out</button>
    </div></div>
  )
}
//{upgradeState != false && <UpgradeModal whitelistAddy={whitelistAddy} Moralis={Moralis} upgradeState={upgradeState} setUpgradeState={setUpgradeState}/>}