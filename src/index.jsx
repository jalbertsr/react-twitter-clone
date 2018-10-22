import React from 'react'
import firebase from 'firebase'
import { render } from 'react-dom'


import App from './components/app'

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: 'github-twitter-41292.firebaseapp.com',
  databaseURL: 'https://github-twitter-41292.firebaseio.com',
  projectId: 'github-twitter-41292',
  storageBucket: 'github-twitter-41292.appspot.com',
  messagingSenderId: '272904097178'
})

render(<App />, document.getElementById('root'))
