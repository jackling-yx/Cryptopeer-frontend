import React from 'react'
import { Link } from 'react-router-dom'

// const Trading = (props) => {
class Trading extends React.Component {

    state = {
        user1Id: this.props.currentUser.id,
        user2Id: this.props.selectedUser ? this.props.selectedUser.id : null,
        user1Amount: null,
        user2Amount: null,
        user1price: null, //this.props.currentUser.user_coins.first.price,
        user2price: null,  
        user1CurrencyId: this.props.currentUser.user_coins.first,        
        user2CurrencyId: this.props.selectedUser ? this.props.selectedUser.user_coins.first : null
    }

    handleTransaction = () => {
       if (this.currentUserTransactionValid) {
            this.returnUser1Amount()
           this.props.updateCurrentUserCoins(this.state.user1Amount, this.state.user1CurrencyId)
           this.props.updateSelectedUserCoins(this.state.user2Amount, this.state.user2CurrencyId)
            this.props.makeTransaction()
       }
       else {
           alert('You do not have enough coins! Please update your selection')
       }
        
    }

    returnUser1Amount = () => {
        this.setState({ user1Amount: (this.state.user2Amount * this.state.user2price / this.state.user1price)})
    }

    currentUserTransactionValid = () => {
        return this.state.user1Amount * this.state.user1price < this.props.currentUser.user_coins.find(parseInt(this.state.user1CurrencyId)).quantity * this.state.user1price
    }

    
    handleChange = (event) => {
        event.persist()
        // debugger
        console.log(event.target.name)
        // const id = event.target.value
        if (event.target.name === "user1CurrencyId") {
            this.setState({ 
                [event.target.name]: event.target.value
                // , 
                // user1price: this.props.currentUser.user_coins.find(this.state.user1CurrencyId).price
            })
        }
        else if (event.target.name === "user2CurrencyId") {
            this.setState({
                [event.target.name]: event.target.value
                // , 
                // user2price: this.props.selectedUser.user_coins.find(this.state.user2CurrencyId).price
            })
        }
        else {
            this.setState({[event.target.name]: event.target.value })
        }
        // debugger
        console.log(this.state)
    }

    render() {
    return (
        <div style={{ display: "flex", alignContent: "column", justifyContent: "center" }} key={Date}>
            {this.props.selectedUser ?
            <div>
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
                    <select name="user1CurrencyId" onChange={this.handleChange}>
                        {this.props.currentUser.user_coins.map(coin => {
                            return <option name={coin.symbol} value={coin.coin_id}  >{coin.symbol}</option>
                        })}
    
                    </select>

                </label>
                   
                   <div>
                        <label>
                            <div>
                                <p>Trading With: {this.props.selectedUser.username}</p>
                                <select name="user2CurrencyId" onChange={this.handleChange}>
                                    {this.props.selectedUser.user_coins.map(coin => {
                                        return <option value={coin.coin_id}>{coin.symbol}</option>
                                    })}
                                </select>
                            </div>
                        </label>
                        <div>
                            Enter number of coins you would like to buy:
                            <input name="user2Amount" value={this.state.user2Amount} onChange={this.handleChange}/>
                        </div>

                        <div>
                            <input type="submit" value="Trade" onSubmit={this.handleTransaction}/>
                        </div>
                    </div>
                      

            </form>
            <div><Link to="/">Close</Link></div>
              
              </div>
                : null}
        </div>
    )}
}

export default Trading