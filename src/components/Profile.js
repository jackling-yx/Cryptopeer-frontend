import React from 'react'
import { Link } from 'react-router-dom'

const Profile = (props) => {
    return (
        <div className="trade-container" style={{display: "flex", alignContent: "column", justifyContent: "center"}}>
          <div className="trade-container-info">
            <div><h2>Hello, <span>{props.currentUser.username}!</span></h2>
            </div>
            <div style={{ display: "block", alignContent: "column"}}>
                    <h3>You Have:</h3>
                    {props.currentUser.user_coins.map(coin =>
                        <p key={coin.id}>{coin.symbol}: {coin.quantity.toFixed(2)}  (approx. {(coin.quantity * coin.price).toFixed(2) } USD) </p>)}
                </div>
            <div style={{ display: "block", alignContent: "column" }}>
                    <h3>Your transaction history</h3>
                    {props.currentUser.transactions.map(transaction =>
                        <p>Transaction ID {transaction.id}: Sold {transaction.user_one_amount.toFixed(2)} {transaction.user_one_currency_symbol} at approx. {transaction.user_one_price.toFixed(2)} USD each; Received {transaction.user_two_amount.toFixed(2)} {transaction.user_two_currency_symbol} at approx. {transaction.user_two_price.toFixed(2)} USD each </p>) }
            </div>
            <div><Link to="/" style={{textDecoration: 'none'}}>Close</Link></div>
          </div>
        </div>
    )
}

export default Profile

// Form to update user profile and wallet started but not implemented - see below.
// Currently the users and user_coins come from the seed file.
/* <br></br>
    <form>
    <div className="email-container">
        <input type="text" className="email-input" placeholder="email" name="email" value={props.currentUser.email} onChange={props.handleChange} />
    </div>
    <div className="firstname-container">
        <input type="text" className="firstname-input" placeholder="First Name" name="firstname" value={props.currentUser.firstname} onChange={props.handleChange} />
    </div>
    <div className="lastname-container">
        <input type="text" className="lastname-input" placeholder="Last Name" name="lastname" value={props.currentUser.lastname} onChange={props.handleChange} />
    </div>
    <div className="imageUrl-container">
        <input type="text" className="imageurl-input" placeholder="Image Link" name="imgUrl" value={props.currentUser.imageUrl} onChange={props.handleChange} />
    </div>
    <div><input type="button" value="Update Profile" /></div>
    </form>

    Add Coins:
    <form>
    <div className="email-container">
        <input type="text" className="email-input" placeholder="Coin Symbol e.g. BTC" name="email" value={props.currentUser.email} onChange={props.handleChange} />
    </div>
    <div className="firstname-container">
        <input type="text" className="firstname-input" placeholder="Insert number of Coins" name="firstname" value={props.currentUser.firstname} onChange={props.handleChange} />
    </div>
    <div className="firstname-container">
        <input type="text" className="firstname-input" placeholder="Selling? True or false" name="firstname" value={props.currentUser.firstname} onChange={props.handleChange} />
    </div>

    <div><input type="button" value="Update Wallet" /></div>
</form> */
