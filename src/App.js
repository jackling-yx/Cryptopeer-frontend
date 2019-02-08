import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listing from './components/Listing'
import ExchangeRate from './components/ExchangeRateCollection'

class App extends Component {
  render() {
    return (
      <div className="shadow">
        <nav className="nav-container">
          <img src="" alt="logo" />
            <ul className="nav-li-container">
              <li className="wallet">Wallet</li>
              <li className="profile">Profile name</li>
              <li className="profile-icon"><img src="" alt="image goes here" /> </li>
            </ul>
        </nav>
            <main>
              <div className="main-container">
                <div className="exchange-window">
                  <p><ExchangeRate /></p>
                </div>
                <div className="collection">
                  <ul>
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
