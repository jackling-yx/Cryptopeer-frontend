import React from 'react'
import { Link } from 'react-router-dom'

const Trading = (props) => {
    return (
        <div style={{ display: "flex", alignContent: "column", justifyContent: "center" }}>
            <form>
                <label>
                    Use Your:
                    <select>
                        <option value="btc">BTC</option>
                        <option value="eth">ETH</option>
                        <option value="ltc">LTC</option>

                    </select>

                </label>
                <label>
                        To Buy:
                    <select>
                        <option value="btc">BTC</option>
                        <option value="eth">ETH</option>
                        <option value="ltc">LTC</option>
                    </select>
                </label>
               
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
            <p><Link to="/">Close</Link></p>
        </div>
    )
}

export default Trading