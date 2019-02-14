import React, { Component } from 'react'
import Login from './Login'
import Signup from './Signup'
import '../App.css'
import Logo from './Logo'

class LoginCollection extends Component {

    state = {
        hasAccount: true,
        existingUser: { 
            username: null,
            password: null
        },
        newUser: {
            username: null,
            password: null,
            email: null,
            firstname: null,
            lastname: null,
            imgUrl: null,
        }
    }

    toggleLogin = () => {
        this.setState({
            hasAccount: !this.state.hasAccount
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        event.persist()
        if (this.state.hasAccount)
            {this.props.login(this.state.existingUser.username, this.state.existingUser.password)
            }
        else {
            this.props.signup(this.state.newUser.username, this.state.newUser.password, this.state.newUser.email, this.state.newUser.firstname, this.state.newUser.lastname, this.state.newUser.imgUrl)
        }
    }

    handleChange = (event) => {
        event.persist()

        if (this.state.hasAccount) {
            let newState = {...this.state.existingUser}
            newState[event.target.name] = event.target.value
            this.setState({ existingUser: newState })
        }

        else {
            let newState = {...this.state.newUser}
            newState[event.target.name] = event.target.value
            this.setState({
               newUser: newState
            })
            
        }
    }

    // Create and persist user into back end -> working!
    // createUser = () => {
    //     fetch('http://localhost:3000/api/v1/users', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Accept: 'application/json'
    //         },
    //         body: JSON.stringify({
    //             user: {
    //                 username: 'Tester',
    //                 email: "tester@gmail.com",
    //                 password: '123',
    //                 first_name: 'Tester',
    //                 last_name: 'Test',
    //                 profile_pic_url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Guy_Fieri_at_Guantanamo_2.jpg'
    //             }
    //         })
    //     })
    //         .then(r => r.json())
    //         .then(console.log)
    // }

    render() {
        // eslint-disable-next-line no-lone-blocks
        
        { if (this.state.hasAccount) {
        return(
            <Login handleChange={this.handleChange} logininfo={this.state} toggleLogin={this.toggleLogin} login={this.handleSubmit}/>
        )}
        else { return(
            <Signup handleChange={this.handleChange} signupinfo={this.state.newUser} toggleLogin={this.toggleLogin} />
        )}
        }
    }
}

export default LoginCollection