import React from 'react'
import { Routes, Route } from "react-router-dom";
import StartPage from './pages/StartPage';
import Layout from "./Layout"
import SignIn from './pages/SignIn';


function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
         <Route path='/start' element={<StartPage/>}/>
         <Route path='/signIn' element={<SignIn/>}/>

      </Route>

    </Routes>
  )
}

export default App
