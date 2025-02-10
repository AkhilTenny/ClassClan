import React from 'react'
import App from './App'
import './App.css';
import { UserTokenProvider } from './context/userAuthContext';



function AppContainer() {
  return (
    <div>
    <App />
  </div>
  )
}

export default AppContainer
