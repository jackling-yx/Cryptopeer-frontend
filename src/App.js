import React, { Component } from 'react';
import './styling/App.css';
import Adapter from './adapters/API'
import ExchangeRateCollection from './components/ExchangeRateCollection'
import ListingCollection from './components/ListingCollection';
import Navbar from './components/Navbar'
import LoginCollection from './components/LoginCollection'
import { Route, Switch } from 'react-router-dom'
import Profile from './components/Profile'
import Trading from './components/Trading'

class App extends Component {

  state = {
    users: [],
    currentUser: null,
    selectedUser: null,
    prices: [],
    coins: []
  }

  updateUserCoins = async (trading_state) => {
    const data = await Adapter.updateUserCoins(trading_state)
    const updatedUser = data.find(user => user.id === this.state.currentUser.id)
    const updatedSelectedUser = data.find(user => user.id === this.state.selectedUser.id)
    this.setState({
      users: data,
      currentUser: { ...updatedUser},
      selectedUser: { ...updatedSelectedUser }
    })
  }

  loginUser = async (username, password) => {
    const data = await Adapter.loginUser(username, password)
      if (data !== undefined) {
        localStorage.setItem('token', data.token)
        this.getUserFromAPI()
        this.fetchAPI()
      }
      else if (data === undefined) {
        return
      }
  }

  logoutUser = () => {
    localStorage.removeItem('token')
    this.setState({
      currentUser: null,
      selectedUser: null
    })
  }

  signupUser = async (username, password, email, firstname, lastname, profile_pic_url) => {
    const data = await Adapter.signupUser(username, password, email, firstname, lastname, profile_pic_url)
    console.log(data)
    this.getUserFromAPI()
    this.fetchAPI()
  }

  patchUserInfo = (email, firstname, lastname, profile_pic_url) => {
    Adapter.patchUserInfo(email, firstname, lastname, profile_pic_url)
  }

  fetchAPI = async() => {
    const data = await Adapter.fetchAPI()
    this.setState({
      users: data
    })
  }

  fetchPrices = async() => {
    const data = await Adapter.fetchPrices()
    this.setState({
      coins: data.sort(function (a, b) {
        return a.name.localeCompare(b.name);
})
    })
  }

  getUserFromAPI = async() => {
    const data = await Adapter.getUserFromAPI()
    this.setState({
      currentUser: data
    })
  }

  getUserCoins = (user) => {
    let coin_array = user.user_coins.filter(user_coin => user_coin.selling === true)
    let id_array = coin_array.map(coin => coin.symbol)
    if (id_array.length > 0) {
      return id_array.join(", ")
    }
    else {
      return "None"
    }
  }

  handleClick = (info) => {
    this.setState({selectedUser: info})
  }

  componentDidMount(){
    const token = localStorage.getItem('token')
    if (!!token){
      this.getUserFromAPI()
      this.fetchAPI()
    }
    this.fetchPrices()
  }

  render() {
    if (this.state.currentUser) {
      return (
        <div className="shadow">
          <Navbar currentUser={this.state.currentUser} logoutUser={this.logoutUser}/>
          <Switch>
            <Route path="/trades/new" component={() => <Trading currentUser={this.state.currentUser} selectedUser={this.state.selectedUser} updateUserCoins={this.updateUserCoins} key={new Date()}/>}></Route>
            <Route path="/profile" component={() => <Profile currentUser={this.state.currentUser}/>} ></Route>
          </Switch>
          <main>
            <div className="main-container">
              <div className="exchange-window">
                <ExchangeRateCollection coins={this.state.coins}/>
              </div>
              <div className="collection">
                <ListingCollection state={this.state} cardPosition={this.state.cardPosition} coinString={this.getUserCoins} handleClick={this.handleClick}/>
              </div>
            </div>
          </main>
          <div className="footer">
            <p>Guide prices from Coinmarketcap API (sandbox). Price information for each coin is the mean of available data.</p>
            <p>Disclaimer: price information is provided as a guide only; any information shown on the Cryptopeer website should not be construed as advice.</p>
            <p>The information is not, and should not be read as, a recommendation to buy or sell any cryptocurrency.</p>
            <p>You are solely responsible for your own investment research, decisions and results.</p>
          </div>
        </div>
      )
    }
    else { return (
      <div className="login-page">
        <LoginCollection login={this.loginUser} signup={this.signupUser} />
       </div>
    )}
  }

}

export default App;
