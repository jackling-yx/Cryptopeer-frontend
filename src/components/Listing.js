import React from 'react'
import '../App.css';


const Listing = (props) => {
    return(
        <li className="card" onClick = {props.trade}>
            <img className="card-profile-picture" src="/images/Blank-Profile-Picture.jpg" alt="Avatar" ></img>
                <div className="card-container">
                    <h4><b>{props.userinfo.username}</b></h4>
                    <p>Selling: {props.coinString(props.userinfo)}</p>
                </div>
        </li>
    )
}

export default Listing
