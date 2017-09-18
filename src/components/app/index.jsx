import React, { Component } from 'react'
import { HashRouter, Match } from 'react-router'
import 'normalize-css'

import Header from '../header'
import Main from '../main'
import Profile from '../profile'

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        photoURL: 'https://avatars1.githubusercontent.com/u/9289219?v=4',
        email: 'jalbertsr@protonmail.ch',
        displayName: 'Joan Albert',
        location: 'Barcelona, Catalunya'
      }
    }
  }

  render () {
    return (
      <HashRouter>
        <div>
          <Header />
          <Match exactly pattern='/' render={() => {
            if (this.state.user) {
              return (
                <Main user={this.state.user} />
              )
            } else {
              // Render <Profile />
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
