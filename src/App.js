import React, { Component } from 'react';
// import { ReactComponent as Logo } from './images/cryptopeer.png';
import './App.css';
import Listing from './components/Listing'
import ExchangeRateCollection from './components/ExchangeRateCollection'
import ListingCollection from './components/ListingCollection';
import Navbar from './components/Navbar'
import LoginCollection from './components/LoginCollection'

class App extends Component {

  state = {
    users: [],
    currentUser: null,
    cardPosition: [0,4],
    carousel: []
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

  loginUser = (username, password) => {
    console.log(username, password) 
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: username, password: password})
    })
    .then( resp => resp.json() )
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

  getUserFromAPI = () => fetch('http://localhost:3000/api/v1/profile', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).then(resp => resp.json())
    .then(data => this.setState({ currentUser: data }))

  componentDidMount(){
    const token = localStorage.getItem('token')

    if (!!token){
      this.getUserFromAPI()
        this.fetchAPI('http://localhost:3000/api/v1/users')
    }
  }


  render() {
     if (this.state.currentUser) {
    return (
      <div className="shadow">
        <Navbar currentUser={this.state.currentUser}/>
            <main>
              <div className="main-container">
                <div className="exchange-window">
                  <ExchangeRateCollection />
                </div>
                <div className="collection">
                  {/* <ul className="list-container"> */}
                   <ListingCollection users={this.state.users} cardPosition={this.state.cardPosition}/>
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

export default App;
