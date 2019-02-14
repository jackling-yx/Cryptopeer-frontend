import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'


const Profile = (props) => {
    return (
        <div style={{display: "flex", alignContent: "column", justifyContent: "center"}}>
            <p>Hello {props.currentUser.username}</p>
            <br></br>
                <form>
                <div className="email-container">
                    <input type="text" className="email-input" placeholder="email" name="email" value={props.currentUser.email} onChange={props.handleChange} />
                </div>
                <div className="firstname-container">
                    <input type="text" className="firstname-input" placeholder="First Name" name="firstname" value={props.currentUser.firstname} onChange={props.handleChange} />
                </div>
                <div className="lastname-container">
                    <input type="text" className="lastname-input" placeholder="Last Name" name="lastname" value={props.currentUser.lastname} onChange={props.handleChange} />
                </div>
                <div className="imageUrl-container">
                    <input type="text" className="imageurl-input" placeholder="Image Link" name="imgUrl" value={props.currentUser.imageUrl} onChange={props.handleChange} />
                </div>
                <div><input type="submit" value="Update Profile" /></div>
                </form>

            <div style={{ display: "block", alignContent: "column"}}>
                    {props.currentUser.user_coins.map(coin => 
                        <div>{coin.coin_id}: {coin.quantity}</div>)}
                </div>
            <p><Link to="/">Close</Link></p>
        </div>
        
    )
}

export default Profile