import React from 'react'
import '../App.css';
import ExchangeRate from './ExchangeRate'


const ExchangeRateCollection = (props) => {
    return (
        <div className="exchange-rate">
           <ul className="exchange-rate-ul">
                <h3>Guide prices (USD)</h3>
               {props.coins.map(coin => <li key={coin.id}>{coin.name}: {coin.price.toFixed(2)}</li> )}
           </ul>
        </div>
    )
}

export default ExchangeRateCollection
