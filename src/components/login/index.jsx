import React, { Component } from 'react'
import styles from './styles.css'

class Login extends Component {
  render () {
    return (
      <div className={styles.root}>
        <p className={styles.text}>
          Necesitamos que inicies sesion con tu cuenta de Github
          para que puedas leer y escribir mensajes.
        </p>
        <button
          onClick={this.props.onAuth}
          className={styles.button}
        >
          <span className='fa fa-github'></span> Login on Github
        </button>
      </div>
    )
  }
}

export default Login
