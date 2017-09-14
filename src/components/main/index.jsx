import React, { Component } from 'react'
import MessageList from '../messageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component {
  constructor () {
    super()
    this.state = {
      openText: false,
      messages: [{
        text: 'primer tweett',
        picture: 'https://avatars1.githubusercontent.com/u/9289219?v=4',
        username: 'jalbertsr',
        displayName: 'Joan Albert',
        date: Date.now()
      },
      {
        text: 'guay tweett',
        picture: 'https://avatars1.githubusercontent.com/u/9289219?v=4',
        username: 'jalbertsr',
        displayName: 'Joan Albert',
        date: Date.now()
      }]
    }
  }

  handleOpenText (event) {
    event.preventDefault()
    this.setState({openText: true})
  }

  renderOpenText () {
    if (this.state.openText) {
      return <InputText />
    }
  }

  render () {
    return (
      <div>
        <ProfileBar
          picture={this.props.user.photoUrl}
          username={this.props.user.email.split('@')[0]}
          anOpenText={this.handleOpenText}
        />
        {this.renderOpenText()}
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
}

export default Main
