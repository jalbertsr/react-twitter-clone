import React, { Component } from 'react'
import styles from './styles.css'

class InputText extends Component {
  render () {
    return (
      <form className={styles.form} onSubmit={this.props.onSendText}>
        <textarea className={styles.text} name='text'></textarea>
        <div className={styles.buttons}>
          <button className={styles.close} onClick={this.props.onCloseText}>Close</button>
          <button className={styles.send} type='submit'> Send </button>
        </div>
      </form>
    )
  }
}

export default InputText
