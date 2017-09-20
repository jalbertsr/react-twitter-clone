import React from 'react'
import styles from './styles.css'

function Profile () {
  return (
    <div className={styles.root}>
      <img className={styles.avatar} src={this.props.picture} />
      <span className={styles.name}> {this.props.displayName}</span>
      <ul className={styles.data}>
        <li>
          <span className='fa fa-user'></span>{this.props.user}
        </li>
        <li>
          <span className='fa fa-envelope'></span>{this.props.emailAdress}
        </li>
        <li>
          <span className='fa fa-map-market'></span>{this.props.location}
        </li>
      </ul>
    </div>
  )
}

export default Profile
