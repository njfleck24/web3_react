import React, {useState} from 'react'
import './AppBox.css'
import { useMoralis } from 'react-moralis';
import { Card, Illustration, Information } from 'web3uikit';
import BalanceBox from './components/BalanceBox';
import MarketBox from './components/MarketBox';
import BattleBox from './components/BattleBox';
import InventoryBox from './components/InventoryBox';
export default function AppBox({ account, stable, arkade, casesState, weaponState}) {
    const { Moralis } = useMoralis();
    const [balanceState, setBalanceState] = useState(0)
    const [marketState, setMarketState] = useState(0)
    const [battleState, setBattleState] = useState(0)
    const [inventoryState, setInventoryState] = useState(0)
    

    function balanceclicked(){
        const balance = document.getElementById("balances")
        if(!balance.selected){
            setBalanceState(1)
        } else {
            setBalanceState(0)
        } 
        
    }
    function marketclicked(){
        
        const balance = document.getElementById("market")
        if(!balance.selected){

            setMarketState(1)
        } else {
            setMarketState(0)
        } 
        
    }
    function battleclicked(){
        
        const balance = document.getElementById("battle")
        if(!balance.selected){
            setBattleState(1)
        } else {
            setBattleState(0)
        } 
        
    }
    function inventoryclicked(){
        const balance = document.getElementById("inventory")
        if(!balance.selected){
            setInventoryState(1)
        } else {
            setInventoryState(0)
        } 
        
    }


    

  return (
    <div className="Appbox">

        <div className="cardDiv" onClick={balanceclicked}>
            <Card id="balances" description="View current token holdings" title="Balances/Swap" tooltipText="This app can be used to view and swap tokens">
                <div className="cardImg">
                    <Illustration height="180px" logo="token" width="100%"/>
                </div>
            </Card>
        </div>
        <div className="cardDiv" onClick={marketclicked}>
            <Card id="market" description="Enter the token marketplace" title="Marketplace" tooltipText="This app can be used to buy ingame items">
                <div className="cardImg">
                    <Illustration height="180px" logo="marketplace" width="100%"/>
                </div>
            </Card>
        </div>
        <div className="cardDiv" onClick={battleclicked}>
            <Card id="battle" description="Upgrade Upgrade Upgrade" title="Upgrade" tooltipText="This app can be used to engage other players in PVP">
                <div className="cardImg">
                    <Illustration height="180px" logo="comingSoon" width="100%"/>
                </div>
            </Card>
        </div>
        <div className="cardDiv" onClick={inventoryclicked}>
            <Card id="inventory" description="Enter the BATTLEFIELD" title="Inventory" tooltipText="This app can be used to engage other players in PVP">
                <div className="cardImg">
                    <Illustration height="180px" logo="" width="100%"/>
                </div>
            </Card>
        </div>
        <div id="out" className="outputBox">
            {balanceState == 0 ? <></> : <BalanceBox stable={stable} arkade={arkade}/>}
            {marketState == 0 ? <></> : <MarketBox account={account} casesState={casesState}/>}
            {battleState == 0 ? <></> : <BattleBox/>}
            {inventoryState == 0 ? <></> : <InventoryBox weaponState={weaponState}/>}
        </div>
        
    </div>
  )
}
