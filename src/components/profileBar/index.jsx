import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './styles.css'

const propTypes = {
  picture: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onOpenText: PropTypes.func.isRequired
}

function ProfileBar ({ picture, username, onOpenText, onLogout }) {
  return (
    <div className={styles.root}>
      <Link to='/profile'>
        <figure>
          <img className={styles.avatar} src={picture} />
        </figure>
      </Link>
      <span className={styles.username}> Hola @{username}!</span>
      <button onClick={onOpenText} className={styles.button}>
        <span className='fa fa-lg fa-edit'></span> Tweet!
      </button>
      <button onClick={onLogout} className={styles.button}>
        <span className='fa fa-sign-out'></span> Salir
      </button>
    </div>
  )
}

ProfileBar.propTypes = propTypes

export default ProfileBar
