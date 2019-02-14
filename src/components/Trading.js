import React from 'react'
import { Link } from 'react-router-dom'

// const Trading = (props) => {
class Trading extends React.Component {

    state = {
        user1Id: this.props.currentUser.id,
        user2Id: this.props.selectedUser.id,
        user1Amount: null,
        user2Amount: null,
        user1price: null,
        user2price: null,
        user1CurrencySymbol: null,        
        user2CurrencySymbol: null
    }

    handleTransaction = () => {

    }

    handleChange = (event) => {
        event.persist()
           
        this.setState({ [event.target.name]: event.target.value })


        console.log(this.state)
    }

    render() {
    return (
        <div style={{ display: "flex", alignContent: "column", justifyContent: "center" }}>
            <div style={{ display: "block", alignContent: "column"}}>
                <p>You have: </p>
                {this.props.currentUser.user_coins.map(coin =>
                    <div>{coin.symbol}: {coin.quantity}</div>)}
            </div>
            <div style={{ display: "block", alignContent: "column" }}>
                <p>{this.props.selectedUser.username} has: </p>
                {this.props.selectedUser.user_coins.map(coin =>
                    <div>{coin.symbol}: {coin.quantity}</div>)}
            </div>

            <form>
                <label>
                    Use Your:
                    <select>
                        {this.props.currentUser.user_coins.map(coin => {
                            return <option name={coin.symbol} value={coin.coin_id} onChange={this.handleChange} >{coin.symbol}</option>
                        })}
    
                    </select>

                </label>
                <label>
                   {this.props.selectedUser ? 
                    <div>
                        <p>Trading With: {this.props.selectedUser.username}</p>
                        <select>
                            {this.props.selectedUser.user_coins.map(coin => {
                                return <option value={coin.coin_id}>{coin.symbol}</option>
                            })}
                        </select>
                    </div>
                        : null}
                        
                    
                </label>
                    
                    <div>
                        Enter number of coins you would like to buy:
                    <input name="user2Amount" onChange={this.handleChange} value={this.state.user2Amount}/>
                    </div>
                   
                    {/* <div>
                        Enter symbol of coin you would like to trade:
                    <input name="user1CurrencySymbol" onChange={this.handleChange} value={this.state.user1CurrencySymbol}/>
                    </div>
                    <div>
                    <input name="user2CurrencySymbol" onChange={this.handleChange} value={this.state.user2CurrencySymbol}/>
                    </div> */}
                    <div><input type="submit" value="Trade" /></div>
                

            </form>
            <div><Link to="/">Close</Link></div>
        </div>
    )}
}

export default Trading