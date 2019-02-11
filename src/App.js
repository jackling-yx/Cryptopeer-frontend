import React, { Component } from 'react';
// import { ReactComponent as Logo } from './images/cryptopeer.png';
import './App.css';
import Listing from './components/Listing'
import ExchangeRateCollection from './components/ExchangeRateCollection'

class App extends Component {

  state = {
    cardPosition: [0, 4]
  }

  // componentDidMount(
      
  // )

  // nextPosition = () => {
  //   const newStart = this.state.cardPosition[0] + 4
  //   const newEnd = this.state.cardPosition[1] + 4
  //   this.setState({
  //     cardPosition: [newStart, newEnd]
  //   })
  // }

  render() {
    return (
      <div className="shadow">
        <nav className="nav-container">
          <div className="nav-logo-container">
            <img className="nav-logo" src="./images/cryptopeer.png" alt="logo" />
          </div>
            <ul className="nav-li-container">
              <li className="wallet">Wallet</li>
              <li className="profile">Profile name</li>
              <li className="profile-icon"><img src="" alt="image goes here" /> </li>
            </ul>
        </nav>
            <main>
              <div className="main-container">
                <div className="exchange-window">
              {/* Change to <ExchangeRateCollection /> later to iterate through array of objects once back-end is up and running*/}
                  <ExchangeRateCollection />
                </div>
                <div className="collection">
                  <ul className="list-container">
                  {/* Change to <ListingCollection /> later to iterate through array of objects once back-end is up and running*/}
                    <li><Listing /></li>
                    <li><Listing /></li>
                    <li><Listing /></li>
                    <li><Listing /></li>
                  </ul>
                </div>
              </div>
            </main>
    </div>
    );
  }
}

export default App;
