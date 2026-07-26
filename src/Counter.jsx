import Header from "./counter_components/Header"
import Form from "./counter_components/Form"
import { useState } from "react"

const Counter = () => {

    //Note: if you have a data that can change after a while, do not save it in a variable/constant. Instead, use useState to manage the state of the data. This way, when the data changes, the component will re-render and display the updated data.
    //balance should be kept inside a state variable so that when it changes, the component re-renders and displays the updated balance. You can use useState to manage the state of the balance and update it accordingly. called useState hook. You can import it from react and use it to create a state variable for balance. Then, you can pass the balance
    //assuming we sent 
    //the balance as a prop to the Header and Form components, we can use it to display the balance in the Header component and update it in the Form component. However, since we are not using useState here, the balance will not change when we click the buttons in the Form component. To fix this, we can use useState to manage the state of the balance and update it accordingly.
    
    // const balance = 1000;
    const [balance, setBalance] = useState(0);

    return (
            <>      
    <div className="container">

        {/* //conditional rendering using ternary operator */}
        
        {
            balance > 5000 ?

            <p className="alert alert-primary">   You are doing well</p>
            :
            <p className="alert alert-warning">You are going broke</p>
        }




        <Header balance = {balance} setBalance={setBalance}/>
        <Form balance={balance} setBalance={setBalance} />

    </div>
            </>
    )
}

export default Counter