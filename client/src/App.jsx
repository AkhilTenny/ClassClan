import React from 'react'
import { Routes, Route } from "react-router-dom";
import StartPage from './pages/user/StartPage';
import Layout from "./Layout"
import SignIn from './pages/user/SignIn';
import ModSignIn from './pages/moderator/ModSignIn';


function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='start' element={<StartPage/>}/>
         <Route path='signIn' element={<SignIn/>}/>
         
         <Route path='moderator'>
          <Route path='signIn' element={<ModSignIn/>}/>

         </Route>

      </Route>

    </Routes>
  )
}

export default App
