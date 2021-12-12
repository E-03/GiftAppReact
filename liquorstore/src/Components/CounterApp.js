import React, {useState} from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({value = 5}) => {

    const [Count, SetCount] = useState(0);
    const [message] = useState("El dato es igual que 5");

    const handleMax = () => { 
        IfIsMayorThan5(Count, message);
        SetCount(Count + 1); 
    }
    
    const handleReset = () => { 
        IfIsMayorThan5(Count, message);
        SetCount(value); 
    
    } 
    
    const handleMin = () => {     
        IfIsMayorThan5(Count, message);
        if(Count === 0) return 0;
        else return SetCount(Count - 1); 
    }
    
    return (
        <>
            <h2>De 1 en 1</h2>
            <label>Valor: { Count }</label><br/><br/>
            <button onClick={ handleMin }>-1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleMax }>+1</button><br/>
            <div id="message"></div>
        </>
    );
}

const IfIsMayorThan5 = (value, state) => {
    const message = document.getElementById("message");
    if(value === 5){
        console.log(`message ${message}`);
        message.innerHTML = state;
    }
    else if(value > 5) {
        console.log("En mayor que 5");
        message.innerHTML = "";
    }
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;
