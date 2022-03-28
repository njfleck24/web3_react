import React, {useEffect} from 'react'
import './erc20balance.css'



export default function TokenBalanceBar({whitelistAddy,assets,Moralis,account,arkade,stable}) {
   



    async function callMoralis(){
        const options = {
            owner_address:account,
            spender_address: arkade,
            address: stable,
            chain:"rinkeby"
        }
        const optionsSC = {
            owner_address:account,
            spender_address: whitelistAddy,
            address: arkade,
            chain:"rinkeby"
        }
        try{
                    const allowance = await Moralis.Web3API.token.getTokenAllowance(options);
        const allowanceSC = await Moralis.Web3API.token.getTokenAllowance(optionsSC);
        let allowances = document.getElementById("allowance")
        let allowancesSC = document.getElementById("allowanceSC")
        allowances.textContent = (allowance.allowance / 10 ** 18)
        allowancesSC.textContent = (allowanceSC.allowance / 10 ** 18)
        } catch{
            
        }

    }

    function createDiv(address){ 
        let balance = 0;
        let name = "";
        let addresss = "";
        let smb = "";
        [...assets].forEach(token => {
            if (token.token_address === address.toLowerCase()){
                balance = parseFloat(Moralis?.Units?.FromWei(token.balance, token.decimals)).toFixed(2);
                name = token.name;
                addresss = token.token_address;
                smb = token.symbol;
            }
        })
        return <div className='tokenBalance'>
               <p>Balance: {balance} </p>  <p>Symbol: {smb}</p> 
            <p>
                Name: {name}
            </p>

        </div>
    }
    useEffect(async () =>{

        await callMoralis()
        
        
    
      }, [account])
    return (
        <>
        <div className='tokenNavBar'>
            {assets && createDiv(stable)}
            <div className='allowanceDiv'onClick={callMoralis}>
                <>Stable Coin Allowance<p id="allowance" ></p></>
                <>Arkade Token Allowance<p id="allowanceSC" > </p></>
            </div>
            {assets && createDiv(arkade)}
        </div></>
    )
}
