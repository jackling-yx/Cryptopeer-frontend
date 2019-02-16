import React from 'react'
import '../styling/App.css';

const ExchangeRateCollection = (props) => {
    return (
        <div className="exchange-rate">
           <ul className="exchange-rate-ul">
                <h3>Guide prices (USD)</h3>
               {props.coins.map(coin => <div key={coin.id} className="exchange-rate-item"><li ><img src={"images/" + coin.symbol +`.png`} alt={coin.symbol}/>{coin.name}: {coin.price.toFixed(2)}</li></div> )}
           </ul>
        </div>
    )
}

export default ExchangeRateCollection
