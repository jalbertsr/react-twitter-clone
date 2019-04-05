import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const propTypes = {
  onAuth: PropTypes.func.isRequired
}

function Login ({ onAuth }) {
  return (
    <div className={styles.root}>
      <p className={styles.text}>
        Necesitamos que inicies sesion con tu cuenta de Github
        para que puedas leer y escribir mensajes.
      </p>
      <button
        onClick={onAuth}
        className={styles.button}
      >
        <span className='fa fa-github'></span> Login on Github
      </button>
    </div>
  )
}

Login.propTypes = propTypes

export default Login
