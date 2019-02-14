import React, { Component } from 'react';
import './App.css';
import Listing from './components/Listing'
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
    coins: []
  }


  loginUser = (username, password) => {
    console.log(username, password)
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: username, password: password})
    })
    .then(resp => resp.json())
    .then(data => {
      if (data !== undefined){
        localStorage.setItem('token', data.token)
        // set state current user to the current user
        this.getUserFromAPI()
        this.fetchAPI('http://localhost:3000/api/v1/users')
      }
    })
  }

  signupUser = (username, password, email, firstname, lastname, profile_pic_url) => {
    fetch('http://localhost:3000/api/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, password: password, email: email, firstname: firstname, lastname: lastname, profile_pic_url: profile_pic_url})
    })
      .then(resp => resp.json())
      .then(data => console.log(data))
  }

  patchUserInfo = (email, firstname, lastname, profile_pic_url) => {
    fetch('http://localhost:3000/api/v1/', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, firstname: firstname, lastname: lastname, profile_pic_url: profile_pic_url })
    })
      .then(resp => resp.json())
      .then(data => console.log(data))
  }

  fetchAPI = (API) => {
    fetch(API, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => response.json())
      .then(data =>
        {const userData = this.state.users
        this.state.users.push(data)
        this.setState({
          users: data
        })
      })
      console.log(this.state)
  }

  fetchPrices = async () => {
    return await fetch("http://localhost:3000/api/v1/update_prices")
      .then(res => res.json())
      .then(data => {this.setState({coins: data})})
    }

  getUserFromAPI = () => fetch('http://localhost:3000/api/v1/profile', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).then(resp => resp.json())
    .then(data =>
    this.setState({ currentUser: data }) )


  getUserCoins = (user) => {
    let coin_array = user.user_coins.filter(user_coin => user_coin.selling === true)
    let id_array = coin_array.map(coin => coin.coin_id)
    if (id_array.length > 0) {
      console.log(id_array)
      let symbol_array = []
      const new_array = id_array.forEach(id => {
        console.log(id)
        let found_coin = user.coins.find(coin => coin.id === id)
        symbol_array.push(found_coin.symbol)
      })
      return symbol_array.join(", ")
    }
    else {
      return "Not trading"
    }
  }

  handleClick = (info) => {
    this.setState({selectedUser: info})
    // give to trading

  }

  componentDidMount(){
    const token = localStorage.getItem('token')

    if (!!token){
      this.getUserFromAPI()
      console.log(this.state)
        this.fetchAPI('http://localhost:3000/api/v1/users')
    }
    this.fetchPrices()
  }


  render() {
     if (this.state.currentUser) {
    return (
      <div className="shadow">
        <Navbar currentUser={this.state.currentUser}/>
        <Switch>
          <Route path="/trades/new" component={() => <Trading currentUser={this.state.currentUser} selectedUser={this.state.selectedUser}/>}></Route>
              <Route path="/profile" component={() => <Profile currentUser={this.state.currentUser}/>} ></Route>
        </Switch>
            <main>

              <div className="main-container">
                <div className="exchange-window">
                  <ExchangeRateCollection coins={this.state.coins}/>
                </div>
                <div className="collection">
                  {/* <ul className="list-container"> */}
              <ListingCollection state={this.state} cardPosition={this.state.cardPosition} coinString={this.getUserCoins} handleClick={this.handleClick}/>
                  {/* </ul> */}
                </div>
              </div>
            </main>

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



  // carousel = () => {
  //   let len = this.state.users.length;
  //   let count = 0
  //   let array = []
  //   while (count + 4 <= len){
  //     array.push([count, count + 4])
  //     count += 4
  //   }
  //   if (len % 4 !== 0 ){
  //     array.push([count, len])
  //   }
  //   // jack to sort this out
  //   this.setState(carousel: array)
  // }

  // changeCarousel = () => {
  //   carousel()
  //   let carousel = this.state.carousel
  //   let cardPosition = this.state.cardPosition
  //   let len = carousel.length

  //   let count = carousel.map(i => i[0]).indexOf(cardPosition[0])

  //   function add(count) {
  //     if (count + 1 >= len) {
  //       count = 0
  //     } else {
  //       count = count + 1
  //     }
  //     return count
  //   }
  //   add(count)
  //   this.setState(cardPosition: carousel[count])
  // }

export default App;
