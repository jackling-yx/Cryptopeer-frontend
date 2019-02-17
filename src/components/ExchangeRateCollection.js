import React from 'react'
import '../styling/App.css';

const ExchangeRateCollection = (props) => {
    return (
        <div className="exchange-rate">
          <h3>Guide prices (USD)</h3>
         {props.coins.map(coin => <p key={coin.id} className="exchange-rate-item"><img src={"images/" + coin.symbol +`.png`} alt={coin.symbol}/><span>{coin.name}: {coin.price.toFixed(2)}</span></p> )}
        </div>
    )
}

export default ExchangeRateCollection
