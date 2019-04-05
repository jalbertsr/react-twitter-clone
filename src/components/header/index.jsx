import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.css'

function Header () {
  return (
    <header className={styles.root}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 className={styles.logo}>Github tweet</h1>
      </Link>
    </header>
  )
}

export default Header
