import React from 'react'
import '../App.css';
import ExchangeRate from './ExchangeRate'


const ExchangeRateCollection = (props) => {
    return (
        <div className="exchange-rate">
           <ul className="exchange-rate-ul">
             Guide prices (USD)
               {props.coins.map(coin => <li key={coin.id}>{coin.name}: {coin.price.toFixed(2)}</li> )}
           </ul>
        </div>
    )
}

export default ExchangeRateCollection
