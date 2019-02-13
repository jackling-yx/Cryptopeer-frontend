import React, { Component } from 'react'
import '../styling/ListingCollection.css';
import '../App.css'
import Listing from './Listing'


// const ListingCollection = () => {
class ListingCollection extends Component {
    render() {
        return (
                <ul className="list-container">
                    {
                    this.props.users.map(user =>
                        <Listing key={user.id} userinfo={user} trade={this.props.trade} coinString={this.props.coinString}/>)
                    }
                </ul>
        )
    }
}

export default ListingCollection
