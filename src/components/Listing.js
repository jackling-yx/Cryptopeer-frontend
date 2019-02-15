import React from 'react'
import '../App.css';
import { Route, Link } from 'react-router-dom'

class Listing extends React.Component {

    render() {
        return(
            <li className="card">
                <img className="card-profile-picture" src="/images/Blank-Profile-Picture.jpg" alt="Avatar" ></img>
                    <div className="card-container">
                        <h4><b>{this.props.userinfo.username}</b></h4>
                            <p>Selling: {this.props.coinString(this.props.userinfo)}</p>
                        {this.props.coinString(this.props.userinfo) != "None" ? 
                        <Link to="/trades/new" className="link" onClick={() => this.props.handleClick(this.props.userinfo)}>Trade</Link> 
                        : null
                        }

                    </div>
            </li>
        )
    }
}

export default Listing