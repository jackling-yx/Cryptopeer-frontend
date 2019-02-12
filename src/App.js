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
    currentUser: [],
    cardPosition: [0, 4],
  }

  componentDidMount(){
    this.fetchAPI('http://localhost:3000/api/v1/users')
    }

  fetchAPI = (API) => {
    fetch(API).then(response => response.json())
      .then(data => 
      {const userData = this.state.users
        this.state.users.push(data)
       this.setState({
          users: data
        })
      })
      console.log(this.state)
  }

  // nextPosition = () => {
  //   const newStart = this.state.cardPosition[0] + 4
  //   const newEnd = this.state.cardPosition[1] + 4
  //   this.setState({
  //     cardPosition: [newStart, newEnd]
  //   })
  // }

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
                  <ul className="list-container">
                   <ListingCollection users={this.state.users} />
                  </ul>
                </div>
              </div>
            </main>
    </div>
    )
  }
    else { return (
      <LoginCollection />
    )}
  
  } 
}

export default App;
