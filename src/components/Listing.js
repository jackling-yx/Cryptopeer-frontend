import React from 'react'
import '../App.css';
import { Route, Link } from 'react-router-dom'


const Listing = (props) => {
    return(
        <li className="card">
            <img className="card-profile-picture" src="/images/Blank-Profile-Picture.jpg" alt="Avatar" ></img>
                <div className="card-container">
                    <h4><b>{props.userinfo.username}</b></h4>
                     <p>Selling: {props.coinString(props.userinfo)}</p>
                    <Link to="/trades/new">Trade</Link> 
                </div>
        </li>
    )
}

export default Listing