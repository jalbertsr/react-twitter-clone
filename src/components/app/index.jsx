import React, { Component } from 'react'
import 'normalize-css'

import styles from './styles.css'
import Header from '../Header'
import Main from '../Main'

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        photoURL: 'https://avatars1.githubusercontent.com/u/9289219?v=4',
        email: 'jalbertsr@protonmail.ch',
        onOpenText: false
      }
    }
  }

  render () {
    return (
      <div>
        <Header />
        <Main user={this.state.user} />
      </div>
    )
  }
}

export default App
