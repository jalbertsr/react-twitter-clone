import React, { Component } from 'react'
import firebase from 'firebase'
import { HashRouter, Match } from 'react-router'
import 'normalize-css'

import Header from '../header'
import Main from '../main'
import Profile from '../profile'
import Login from '../login'

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: null
    }
    this.handleOnAuth = this.handleOnAuth.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user })
      } else {
        this.setState({ user: null })
      }
    })
  }

  handleOnAuth () {
    const provider = new firebase.auth.GithubAuthProvider()

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(result))
      .catch(result => console.log(result))
  }

  handleLogout () {
    firebase.auth().signOut()
      .then(() => console.log('Te has desconectado correctamente'))
      .catch(() => console.error('Error en el logout'))
  }

  render () {
    return (
      <HashRouter>
        <div>
          <Header />
          <Match exactly pattern='/' render={() => {
            if (this.state.user) {
              return (
                <Main
                  user={this.state.user}
                  onLogout={this.handleLogout}
                />
              )
            } else {
              return (
                <Login onAuth={this.handleOnAuth} />
              )
            }
          }} />
          <Match pattern='/profile' render={() => {
            return (
              <Profile
                picture={this.state.user.photoURL}
                username={this.state.user.email.split('@')[0]}
                displayName={this.state.user.displayName}
                location={this.state.user.location}
                emailAdress={this.state.user.email}
              />
            )
          }} />
          <Match pattern='/user/:username' render={({ params }) => {
            return (
              <Profile
                displayName={params.username}
                username={params.username}
              />
            )
          }} />
        </div>
      </HashRouter>
    )
  }
}

export default App
