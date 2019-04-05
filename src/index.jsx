import React from 'react'
import firebase from 'firebase'
import { render } from 'react-dom'

import App from './components/app'

firebase.initializeApp({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId
})

render(<App />, document.getElementById('root'))
