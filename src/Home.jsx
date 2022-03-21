import { useMoralis, useERC20Balances } from 'react-moralis';
import './Home.css'
import Navbar from './Navbar';
import TokenBalanceBar from './components/TokenBalanceBar';
import MainAppBar from './components/MainAppBar';
import { Avatar } from 'web3uikit';
import AppBox from './AppBox'
import UpgradeModal from './UpgradeModal';
import BalanceBox from './components/BalanceBox';
import InventoryBox from './components/InventoryBox';
import MarketBox from './components/MarketBox';
import BattleBox from './components/BattleBox';
import React, {useEffect, useState} from "react";

export default function Home( { account, Moralis, logout}) {
  const stable  = "0xE20222816d6ec1C0Bc21bf962991262F10b3bFe0"
  const arkade = "0xC47E6C2C331E83fA6eD9F22b003967692C2D5Ed8"
  const weaponAddy = "0xeb8F4752dbBFF354ca31FC3b65758c462D7B6946"
  const whitelistAddy = "0x147f6dc0AE2a2d9A153E9aADe73dFc6AdF7463C9"
  const playerCard = "0xAe965B8bE78bE18086b2Bf61D5D8017781d48e01"
  
  const { data: assets } = useERC20Balances();
  const [layoutState, setLayoutState] = useState(false)  
  const [upgradeState, setUpgradeState] = useState(false)  
  const [casesState, setCasesState] = useState([])
  const [weaponState, setWeaponState ] = useState([])
  const [playerState, setPlayerState ] = useState([0,0,"none"])
  const [nftLoaded, setNftLoaded] = useState(true)
    const logOut = () => {
        logout()
    }
    function dynamicsort(property,order) {
      var sort_order = 1;
      if(order === "desc"){
          sort_order = -1;
      }
      return function (a, b){
          // a should come before b in the sorted order
          if(a[property] < b[property]){
                  return -1 * sort_order;
          // a should come after b in the sorted order
          }else if(a[property] > b[property]){
                  return 1 * sort_order;
          // a and b are the same
          }else{
                  return 0 * sort_order;
          }
      }
  }
    
    async function getNFTs(ids){
      let options = { chain:'0x4', token_address:weaponAddy}
      let nft = await Moralis.Web3API.token.getNFTOwners(options)
      let temp = []
      nft.result.forEach( async (result) => {
        if(ids.includes(parseInt(result.token_id) )){
          let statOptions = { abi:[{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getStats","outputs":[{"components":[{"internalType":"uint256","name":"damage","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"parry","type":"uint256"},{"internalType":"uint256","name":"crit","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"grade","type":"uint256"},{"internalType":"uint256","name":"upgradeCount","type":"uint256"},{"internalType":"uint256","name":"upgradeDamage","type":"uint256"},{"internalType":"uint256","name":"upgradeParry","type":"uint256"},{"internalType":"uint256","name":"upgradeCrit","type":"uint256"}],"internalType":"struct BattleWeapon.stats","name":"","type":"tuple"}],"stateMutability":"view","type":"function"}],
          contractAddress:weaponAddy,
          functionName: "getStats",
          params:{"id":result.token_id},msgValue:0}
          let count = await Moralis.executeFunction(statOptions)
          console.log(count)
          const temp_crit = parseInt(count.crit._hex)
          const temp_damage = parseInt(count.damage._hex)
          const temp_parry = parseInt(count.parry._hex)
          const temp_grade = parseInt(count.grade._hex)
          const temp_UC = parseInt(count.upgradeCount._hex)
          const temp_Ucrit = parseInt(count.upgradeCrit._hex)
          const temp_Udmg = parseInt(count.upgradeDamage._hex)
          const temp_Uparry = parseInt(count.upgradeParry._hex)
          const metadataa = JSON.parse(result.metadata)
            const temp_obj = {name:metadataa.name, attributes:[
            {trait_type:"Damage",value:temp_damage},
            {trait_type:"Parry",value:temp_parry},
            {trait_type:"Grade",value:temp_grade},
            {trait_type:"Upgrade Count",value:temp_UC},
            {trait_type:"upgrade crit",value:temp_Ucrit},
            {trait_type:"upgrade damage",value:temp_Udmg},
            {trait_type:"upgrade parry",value:temp_Uparry},
            {trait_type:"Crit",value:temp_crit}]}
          temp.push({meta:temp_obj,id:parseInt(result.token_id)})
          } 
        }
        )
        console.log("Setting NFT Inventory State")
      setWeaponState(temp.sort(dynamicsort("id","")))
      setNftLoaded(false)
  }

  async function getNFTOwned(){
    console.log("GETTING NFT ITEMS")
    let countoptions = { abi:[{"inputs":[],"name":"tokenCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],
        contractAddress:weaponAddy,
        functionName: "tokenCount",
        params:{},msgValue:0}
    let count = await Moralis.executeFunction(countoptions)
    count = parseInt(count._hex)
    let counter = 0
    let ids = []
    while (counter < count){
      let options = { abi:[{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}],
      contractAddress:weaponAddy,
      functionName: "ownerOf",
      params:{"tokenId":counter},msgValue:0}
     
      let nft = await Moralis.executeFunction(options)
      nft = nft.toLowerCase()
      if (account === nft){
        ids.push(counter)
      }
      counter += 1
    }
    await getNFTs(ids)
    return true
  }

  const loadCases = async function (){
      let countResult = 0
      try{
        countResult = await Moralis.executeFunction({abi:[{"inputs":[],"name":"casesContractCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],
        contractAddress: whitelistAddy,
        functionName: "casesContractCount",
          params:{
          },msgValue:0});
      } catch {
        console.log("Case Load Fail")
        return false
      }

      let count = parseInt(countResult._hex)
      let counter = 0
      let tempState = []
      let resultAddresses = []
      while (counter < count){
      let result = await Moralis.executeFunction({abi:[{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"casesWhiteList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}],
                                                  contractAddress: whitelistAddy,
                                                  functionName: "casesWhiteList",
                                                  params:{
                                                    "":counter
                                                  },
                                                  msgValue:0});
      if (result !== "0x0000000000000000000000000000000000000000"){
        resultAddresses.push(result);
      }
      counter++
      }

      await getCaseStats(resultAddresses)
      return true
    }
  
    async function testtt(){
      console.log(weaponState)
    }

    async function getCase(address){
      let name = ""
      let cost = ""
      let options = {abi:[{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}],
      contractAddress: address,
      functionName: "name",
        params:{
        },msgValue:0}
      try{
        name = await Moralis.executeFunction(options)
      } catch {
        console.log("failed to fetch name")
      }
      let optionsCost = {abi:[{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],
      contractAddress: address,
      functionName: "cost",
        params:{
        },msgValue:0}

      try{
        cost = await Moralis.executeFunction(optionsCost)
        cost = parseInt(cost._hex)
      } catch {
        console.log("failed to fetch cost")
      }
      let optionsCount = {abi:[{"inputs":[],"name":"prizeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],
      contractAddress: address,
      functionName: "prizeCount",
        params:{
        },msgValue:0}
      let count = 0
      try{
        count = await Moralis.executeFunction(optionsCount)
        count = parseInt(count._hex)
      } catch {
        console.log("failed to prize count")
      }
      let prizeOptions = {abi:[{"inputs":[],"name":"getPrizes","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"damage","type":"uint256"},{"internalType":"uint256","name":"lowticket","type":"uint256"},{"internalType":"uint256","name":"highticket","type":"uint256"},{"internalType":"uint256","name":"critChance","type":"uint256"},{"internalType":"uint256","name":"parryChance","type":"uint256"}],"internalType":`struct case1.prize[${count}]`,"name":"","type":`tuple[${count}]`}],"stateMutability":"view","type":"function"}],
      contractAddress: address,
      functionName: "getPrizes",
        params:{
        },msgValue:0}
      let prizeList = []
      try{
        let prizes = await Moralis.executeFunction(prizeOptions)
        console.log(prizes)
        prizes.forEach( (prize) =>{
          prizeList.push({name:prize.name, damage:parseInt(prize.damage),crit:parseInt(prize.critChance),parry:parseInt(prize.parryChance),lowticket:parseInt(prize.lowticket),highticket:parseInt(prize.highticket)})
        })
      } catch {
        console.log("failed to fetch Prizes")
      }

      return {cost:cost, name:name, address:address, prizes:prizeList};

    }
  
    async function getCaseStats(addresses){
      let caseObjects = []
      addresses.forEach( async (address) => {
        caseObjects.push(await getCase(address))
      })
      setCasesState(caseObjects)
    }

    async function getAccount(){
      return account
    }

    function sleep(time){
      return new Promise((resolve)=>setTimeout(resolve,time)
    )
  }
  async function getPlayerCard(){
    let affOptions = {abi:[{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"affiliate","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}],
    contractAddress: playerCard,
    functionName: "affiliate",
      params:{"":account
      },msgValue:0}
    let aff = 0
    try{
      aff = await Moralis.executeFunction(affOptions)
      //exp = parseInt(exp._hex)
    } catch {
      console.log("failed to fetch exp")
    }
    let expOptions = {abi:[{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"exp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],
      contractAddress: playerCard,
      functionName: "exp",
        params:{"":aff
        },msgValue:0}
      let exp = 0
      let percentage = 0
      try{
        exp = await Moralis.executeFunction(expOptions)
        exp = parseInt(exp._hex)
      } catch {
        console.log("failed to fetch exp")
      }
      if(exp < 1000){
        percentage = 0;
      } else if( exp < 5000){
        percentage = 2;
      }
       else if( exp < 15000){
        percentage = 4;
      }
       else if( exp < 50000){
        percentage = 6;
      }
       else if( exp < 250000){
        percentage = 8;
      }
       else{
        percentage = 10;
      }

      setPlayerState({exp:exp,aff:aff,percentage:percentage})
  }
  useEffect(async () =>{

    console.log("running loads")
    const loaded = await loadCases()
    console.log(loaded)
    console.log("end loads")
    await sleep(1000)
    getNFTOwned()

  }, [assets])
  return (
    <div className='homeBody'>
      
      <Navbar playerCard={playerCard} Moralis={Moralis} playerState={playerState} getPlayerCard={getPlayerCard} arkade={arkade}/>
      <div className="bodyContent">
      <MainAppBar  getNFTOwned={getNFTOwned} setLayoutState={setLayoutState} layoutState={layoutState}/>
      {layoutState && layoutState.map( (tmp, index) => {
        if (tmp === 1 ){
          return <div className='contentDiv'><BalanceBox whitelistAddy={whitelistAddy} key={index} stable={stable} arkade={arkade} Moralis={Moralis} account={account} assets={assets}/></div>
        } else if (tmp === 2) {
          return <div className='contentDiv'>{upgradeState != false && <UpgradeModal whitelistAddy={whitelistAddy} Moralis={Moralis} upgradeState={upgradeState} setUpgradeState={setUpgradeState}/>}<InventoryBox setUpgradeState={setUpgradeState} whitelistAddy={whitelistAddy} key={index} weaponState={weaponState}/></div>
        } else if ( tmp === 3){
          return <div className='contentDiv'><MarketBox whitelistAddy={whitelistAddy} key={index} account={account} casesState={casesState}/></div>
        }
      })
      }
        <button id="logoutBtn" onClick={logOut}>Log Out</button>
    </div></div>
  )
}
