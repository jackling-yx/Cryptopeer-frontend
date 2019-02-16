import React from 'react'
import '../styling/App.css';
import { Link } from 'react-router-dom'
const MAX_LENGTH = 8

class Listing extends React.Component {

  checkTextLength = (text) => {
    return (
      text.length > MAX_LENGTH ?
        `${text.substring(0, MAX_LENGTH)}...` : text
    )
  }

  render() {
    return(
      <li className="card">
        <img className="card-profile-picture" src={this.props.userinfo.profile_pic_url !== "" ? this.props.userinfo.profile_pic_url : "/images/Blank-Profile-Picture.jpg"} alt="Avatar" ></img>
          <div className="card-container">
              <h4><b>{this.props.userinfo.username}</b></h4>
                  <p>Selling: {this.checkTextLength(this.props.coinString(this.props.userinfo))}</p>
              {this.props.coinString(this.props.userinfo) !== "None" ?
              <Link to="/trades/new" className="link" onClick={() => this.props.handleClick(this.props.userinfo)}>Trade</Link>
              : null
              }

          </div>
      </li>
    )
  }
}

export default Listing
