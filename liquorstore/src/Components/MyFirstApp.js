import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ ddd, subtitle }) => {
    //Este ddd es la variable que tiene el index;
    //const { ddd } = props; //desestructuración
    
    console.log("ddd " + ddd );
    //console.log("Variable " + props.variable);

    const name = "Eber Fabal";

    return(
        // Fragment or <></>
        <>
            <h1>Hola, {name}</h1>
        </>
    ); 
}

//Validaciones de Props
FirstApp.propTypes = {
    ddd: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

//Valores por defecto y para que aparezca en los props.
FirstApp.defaultProps = {
    subtitle: ""
}

export default FirstApp;

