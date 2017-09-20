import React, { PropTypes } from 'react'
import styles from './styles.css'

const propTypes = {

}
class InputText extends Component {
  render () {
    return (
      <form className={styles.form} onSubmit={this.props.onSendText}>
        <textarea className={styles.text} name='text'>
          {(this.props.userNameToReply) ? `@${this.props.userNameToReply} ` : ''}
        </textarea>
        <div className={styles.buttons}>
          <button className={styles.close} onClick={this.props.onCloseText}>Close</button>
          <button className={styles.send} type='submit'> Send </button>
        </div>
      </form>
    )
  }
}

export default InputText
