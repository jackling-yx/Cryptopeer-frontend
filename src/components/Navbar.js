import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

const Navbar = (props) => {
    return (
        <nav className="nav-container">
            <div className="nav-logo-container">
                <img className="nav-logo" src="./images/cryptopeer.png" alt="logo"/>
            </div>
            <ul className="nav-li-container">
                {/* <li className="wallet">Wallet</li> */}
                <li className="profile-icon"><img src={props.currentUser.profile_pic_url} alt="image goes here" /> </li>
                <Link to="/profile"><li className="profile" >Go to Profile</li></Link>
            </ul>
        </nav>
    )
}


export default Navbar