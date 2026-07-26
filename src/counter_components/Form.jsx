import { useState } from "react";

const Form = ({balance, setBalance}) => {

    //all your logic for withdraw and deposit will go here. You can use useState to manage the state of the input fields and handle the button clicks to update the balance accordingly.
    //a state to manage input

    const[amount, setAmount] = useState("");
   
   
    function handle_Withdraw() {

         if(amount > balance){
                        alert('insufficient balance');
                        return;
                    }
        setBalance(balance - amount);
         setAmount('');
          return;
    }
    function handle_Deposit() {
        setBalance(balance + amount);
       
        return;
    }

  return (
    <div className='row py-2'>
        <div className="col-md-2 py-2">
            <button className='btn btn-warning' onClick={handle_Withdraw}>Withdraw</button>
        </div>

        <div className="col-md-2">
            <input type="number" className="form-control py-3" value={amount} onChange={
                function(e){
                        setAmount(e.target.value);
                }
            }/>
        </div>

        <div className="col-md-2 py-2">
            <button className='btn btn-primary' onClick={
                function handle_Deposit() {

                    // balance = balance + 1000
                    // console.log(balance);
                    // alert('you deposited 1000');
                    
                    
                    setBalance(balance + Number(amount));
                    setAmount('');

                }
            }>Deposit </button>
        </div>
    </div>
  )
}

export default Form