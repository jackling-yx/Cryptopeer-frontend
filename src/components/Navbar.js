import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/App.css';

const Navbar = (props) => {
    return (
        <nav className="nav-container">
            <div className="nav-logo-container">
                <img className="nav-logo" src="./images/cryptopeer_logo.png" alt="logo"/>
            </div>
            <ul className="nav-li-container">
                <Link to="/"><li className="link" onClick={props.logoutUser}>Log Out</li></Link>
                <Link to="/profile"><li className="link" >Profile</li></Link>
                <Link to="/"><li className="link" >Home</li></Link>
            </ul>
        </nav>
    )
}


export default Navbar
