import React, {useState} from 'react'
import AffiliateCode from './AffiliateCode'
export default function AccountModal({whitelistAddy,profileModal,playerCard, account, Moralis,playerState}) {
    const [affState, setAffState] = useState(false)
    console.log(playerState)
    console.log(playerState.aff)
    const aff = playerState.aff
    let first = ""
    let last = ""
    try{
        first = aff.substring(0,6)
        last = aff.substring(38,42)
    }catch {
        
    }
    
    const affAddy = `${first}...${last}`
  return (
      <div className="modalctr">
    <div id="accountModal" className={true ? "active" : ""}>
        <div className='affAddress'>
            <p>Affiliate Code Used:</p>
            {affAddy}
            <button onClick={ () => {
                setAffState(!affState)
            }}>Change Affiliate Code</button>
            {affState && <AffiliateCode playerCard={playerCard} account={account} Moralis={Moralis} />}
        </div>
        <div className='affAddress'>
            <p>Affiliate EXP:</p>
            {playerState.exp}
        </div>
        <div className='affAddress'>
            <p>Affiliate Percent:</p>
            {playerState.percentage}
        </div>
        <button onClick={async () =>{
            let options = { abi:[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"activatePlayerCard","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newContract","type":"address"}],"name":"addCaseContract","outputs":[],"stateMutability":"nonpayable","type":"function"}],
            contractAddress:whitelistAddy,
            functionName: "activatePlayerCard",
            params:{},msgValue:0}
        await Moralis.executeFunction(options)
        }}>Activate</button>

    </div></div>
  )
}
