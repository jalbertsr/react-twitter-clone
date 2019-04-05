import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const propTypes = {
  picture: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  emailAdress: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

function Profile ({ picture, displayName, username, emailAdress, location }) {
  return (
    <div className={styles.root}>
      <img className={styles.avatar} src={picture} />
      <span className={styles.name}> {displayName}</span>
      <ul className={styles.data}>
        <li>
          <span className='fa fa-user'></span>{username}
        </li>
        <li>
          <span className='fa fa-envelope'></span>{emailAdress}
        </li>
        <li>
          <span className='fa fa-map-market'></span>{location}
        </li>
      </ul>
    </div>
  )
}

Profile.propTypes = propTypes

export default Profile
