import React, { Component } from 'react'
import Login from './Login'
import Signup from './Signup'
import '../App.css'
import Logo from './Logo'

class LoginCollection extends Component {

    state = {
        username: null,
        password: null,
        hasAccount: true,
        newUser: {
            username: null,
            password: null,
            email: null,
            firstname: null,
            lastname: null,
            imageUrl: null,
        }
    }

    toggleLogin = () => {
        this.setState({
            hasAccount: !this.state.hasAccount
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log("Submitted!")
    }

    handleChange = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        // eslint-disable-next-line no-lone-blocks
        
        { if (this.state.hasAccount) {
        return(
            <Login handleChange={this.handleChange} logininfo={this.state} toggleLogin={this.toggleLogin}/>
        )}
        else { return(
            <Signup handleChange={this.handleChange} signupinfo={this.state.newUser} toggleLogin={this.toggleLogin} />
        )}
        }
    }
}

export default LoginCollection