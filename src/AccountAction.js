import React, { useState } from 'react';
import{store,withdraw,deposit} from './ReduxAccount';

const AccountAction=()=>{
    const[disabled,setDisabled]=useState(false);
    const [amount,setAmount]=useState(0);
 
    let withdraw = () => {
        console.log("value is" + amount);
        store.dispatch({ type: "WITHDRAW", selectedamount: parseInt(amount) });
      };
    
      let deposit = () => {
        store.dispatch({ type: "DEPOSIT",selectedamount:parseInt(amount) });
      };
    

 return(
     <div>
         <input type='text' name='amount' value={amount} onChange={(e)=>setAmount(e.target.value)}  />
         <button onClick={withdraw}>Withdraw</button>
        <button onClick={deposit}>Deposit</button>
     </div>
 )   
}
export default AccountAction;