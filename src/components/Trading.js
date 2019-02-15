import React from 'react'
import { Link } from 'react-router-dom'

class Trading extends React.Component {

    state = {
        user1Id: this.props.currentUser.id,
        user2Id: this.props.selectedUser ? this.props.selectedUser.id : null,
        user1Amount: null,
        user2Amount: null,
        user1Price: this.props.currentUser.user_coins[0].price,
        user2Price: null,  
        user1CurrencyId: this.props.currentUser.user_coins[0].coin_id,        
        user2CurrencyId: this.props.selectedUser ? this.props.selectedUser.user_coins[0].coin_id : null
    }

    handleTransaction = event => {
        event.preventDefault()
        event.persist()
        let user2CurrId = this.props.selectedUser.user_coins.find((coin) => {
            return coin.coin_id == parseInt(this.state.user2CurrencyId)
        })
        let user1CurrId = this.props.currentUser.user_coins.find((coin) => {
            return coin.coin_id == parseInt(this.state.user1CurrencyId)
        })
        let amount = this.state.user2Amount * user2CurrId.price / user1CurrId.price
        this.setState({ user2Price: user2CurrId.price, user1Price: user1CurrId.price, user1Amount: amount }, () => this.verify())  
    }

    verify = () => {
        if (this.currentUserTransactionValid()) {
            this.props.updateUserCoins(this.state)
        }
        else {
            alert('Transaction not valid! Please update your selection')
        }
    }

    currentUserTransactionValid = () => {
        let test1 = this.state.user1Amount < this.props.currentUser.user_coins.find((coin) => coin.coin_id == parseInt(this.state.user1CurrencyId)).quantity 
        let test2 = (this.props.currentUser.user_coins.find((coin) => coin.coin_id == parseInt(this.state.user1CurrencyId)).quantity - this.state.user1Amount) >= 0
        let test3 = (this.props.selectedUser.user_coins.find((coin) => coin.coin_id == parseInt(this.state.user2CurrencyId)).quantity - this.state.user2Amount) >= 0

        return test1 && test2 && test3
    }

    handleChange = (event) => {
        const user1CurrencyPrice = [...this.props.currentUser.user_coins]
        event.persist()
        this.setState({[event.target.name]: event.target.value })
    }

    render() {
    return (
        <div className="trade-container" style={{ display: "flex", alignContent: "column", justifyContent: "center" }} key={Date}>
            {this.props.selectedUser ?
            <div className="trade-container-info">
            <div className="trade-container-text" style={{ display: "block", alignContent: "column"}}>
                <p>You have: </p>
                {this.props.currentUser.user_coins.map(coin =>
                    <div>{coin.symbol}: {coin.quantity.toFixed(2)} / {Math.round(coin.quantity * coin.price * 100) / 100} USD</div>)}
            </div>
                    <div className="trade-container-text" style={{ display: "block", alignContent: "column" }}>
                <p>{this.props.selectedUser.username} has: </p>
                {this.props.selectedUser.user_coins.map(coin =>
                    <div>{coin.symbol}: {coin.quantity.toFixed(2)} / {Math.round(coin.quantity * coin.price * 100) / 100} USD</div>)}
            </div>
            <form className="trade-form">
                <label>
                    Use Your:
                    <select name="user1CurrencyId" onChange={this.handleChange}>
                        {this.props.currentUser.user_coins.map((coin, index) => {
                            return <option name={coin.symbol} value={coin.coin_id}  >{coin.symbol}</option>
                        })}
                    </select>
                </label>
                   <div c>
                        <label>
                            <div className="trade-form-receiver-text">
                                    <p>Trading With: <span>{this.props.selectedUser.username}</span></p>
                                <select name="user2CurrencyId" onChange={this.handleChange}>
                                    {this.props.selectedUser.user_coins.map((coin, index) => {
                                        return <option value={coin.coin_id}>{coin.symbol}</option>
                                    })}
                                </select>
                            </div>
                        </label>
                        <div className={'coins_amount'}>
                            Enter number of coins you would like to buy:
                            <input name="user2Amount" value={this.state.user2Amount} onChange={this.handleChange}/>
                        </div>
                        <div className={'popup_btn_wrapper'}>
                            <button className="trade-button" type="button" value="Trade" onClick={this.handleTransaction}>Trade</button>
                        </div>
                    </div>
            </form>
            <div className="trade-close"><Link to="/">Close</Link></div>
              </div>
                : null}
        </div>
    )}
}

export default Trading