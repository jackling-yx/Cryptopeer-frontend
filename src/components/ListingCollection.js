import React, { Component } from 'react'
import '../styling/ListingCollection.css';
import '../App.css'
import Listing from './Listing'
import Trading from './Trading'


// const ListingCollection = () => {
class ListingCollection extends Component {


    render() {
        return (
            <ul className="list-container">
                {
                    this.props.state.users.map(user =>
                        <Listing key={user.id} userinfo={user} currentUser={this.props.state.currentUser} state={this.props.state} coinString={this.props.coinString}/>)
                }
            </ul>
        )      
    }
}

export default ListingCollection