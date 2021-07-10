import React from 'react';

const Card = (props) => {
    //destructuring => équivaut a "const country = props.coutry"
    const { country } = props
    
    const numberFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return (
        
        <li className="card">
         <img src={country.flag} alt="flag" />
         <div className="data-container">
            <ul>
                <li>Nom:  {country.name} </li>
                <li>Capitale: {country.capital} </li>
                <li> Pop: {numberFormat(country.population)} </li>
            </ul>
         </div>
        </li>
    );
};

export default Card;