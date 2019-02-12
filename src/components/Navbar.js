import React from 'react'
import '../App.css';

const Navbar = (props) => {
    return (
        <nav className="nav-container">
            <div className="nav-logo-container">
                <img className="nav-logo" src="./images/cryptopeer.png" alt="logo" />
            </div>
            <ul className="nav-li-container">
                {/* <li className="wallet">Wallet</li> */}
                <li className="profile">Profile name</li>
                <li className="profile-icon"><img src="" alt="image goes here" /> </li>
            </ul>
        </nav>
    )
}


export default Navbar