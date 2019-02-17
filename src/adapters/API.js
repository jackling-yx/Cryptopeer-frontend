import { Component } from 'react';

const API = 'http://localhost:3000/api/v1'

export default class Adapter extends Component {

  static loginUser = async (username, password) => {
    return await fetch(API + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: username, password: password})
    })
    .then(resp => resp.json())
    .then(data => {return data})
  }

  static signupUser = async (username, password, email, firstname, lastname, profile_pic_url) => {
    return await fetch(API + '/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, password: password, email: email, firstname: firstname, lastname: lastname, profile_pic_url: profile_pic_url})
    })
    .then(resp => resp.json())
    .then(data => {return data})
  }

  static patchUserInfo = (email, firstname, lastname, profile_pic_url) => {
    fetch(API, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, firstname: firstname, lastname: lastname, profile_pic_url: profile_pic_url })
    })
      .then(resp => resp.json())
  }

  static fetchAPI = async () => {
    const response = await fetch(API + '/users', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    const json = await response.json()
    return json
  }

  static fetchPrices = async() => {
    const response = await fetch(API + "/update_prices")
    const json = await response.json()
    return json
  }

  static getUserFromAPI = async() => {
    const response = await fetch(API + '/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    const json = await response.json()
    return json
  }

  static updateUserCoins = (trading_state) => {
    return fetch(API + "/transactions", {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        trading_state
      })
    })
    .then(res => res.json())
    .then(data => {return data})
  }
}
