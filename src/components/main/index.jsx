import React, { Component } from 'react'
import uuid from 'uuid'
import MessageList from '../messageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component {
  constructor () {
    super()
    this.state = {
      openText: false,
      messages: [{
        id: uuid.v4(),
        text: 'primer tweett',
        picture: 'https://avatars1.githubusercontent.com/u/9289219?v=4',
        username: 'jalbertsr',
        displayName: 'Joan Albert',
        date: Date.now(),
        retweets: 0,
        favorites: 0
      },
      {
        id: uuid.v4(),
        text: 'guay tweett',
        picture: 'https://avatars1.githubusercontent.com/u/9289219?v=4',
        username: 'jalbertsr',
        displayName: 'Joan Albert',
        date: Date.now(),
        retweets: 0,
        favorites: 0
      }]
    }

    this.handleSendText = this.handleSendText.bind(this)
    this.handleCloseText = this.handleCloseText.bind(this)
    this.handleOpenText = this.handleOpenText.bind(this)
  }

  handleSendText (event) {
    event.preventDefault()
    let newMessage = {
      id: uuid.v4(),
      username: this.props.user.email.split('@')[0],
      displayName: this.props.user.displayName,
      picture: this.props.user.photoURL,
      date: Date.now(),
      text: event.target.text.value
    }

    this.setState({
      messages: this.state.messages.concat([newMessage]),
      openText: false
    })
  }

  handleCloseText (event) {
    event.preventDefault()
    this.setState({ openText: false })
  }

  handleOpenText (event) {
    event.preventDefault()
    this.setState({ openText: true })
  }

  renderOpenText () {
    if (this.state.openText) {
      return (
        <InputText
          onSendText={this.handleSendText}
          onCloseText={this.handleCloseText}
        />
      )
    }
  }

  handleRetweet () {

  }

  handleFavorite () {

  }

  render () {
    return (
      <div>
        <ProfileBar
          picture={this.props.user.photoURL}
          username={this.props.user.email.split('@')[0]}
          onOpenText={this.handleOpenText}
        />
        {this.renderOpenText()}
        <MessageList
          messages={this.state.messages}
          onRetweet={this.handleRetweet}
          onFavorite={this.handleFavorite}
        />
      </div>
    )
  }
}

export default Main
