import React, { Component } from 'react'
import firebase from 'firebase'
import { HashRouter, Route, Switch } from 'react-router-dom'
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

  componentDidMount () {
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
      .catch(error => console.error(error))
  }

  handleLogout () {
    firebase.auth().signOut()
      .then(() => console.log('You logged out correctly!'))
      .catch(() => console.error('Error while trying to logout'))
  }

  render () {
    return (
      <HashRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' render={() => {
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
            <Route exact path='/profile' render={() => {
              return (
                <Profile
                  picture={this.state.user.photoURL}
                  username={this.state.user.email.split('@')[0]}
                  displayName={this.state.user.displayName}
                  emailAdress={this.state.user.email}
                />
              )
            }} />
            <Route exact path='/user/:username' render={({ match: { params } }) => {
              return (
                <Profile
                  displayName={params.username}
                  username={params.username}
                />
              )
            }} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default App
