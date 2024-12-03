import React from 'react'
import { Routes, Route } from "react-router-dom";
import StartPage from './pages/user/StartPage';
import Layout from "./Layout"
import SignIn from './pages/moderator/components/SignIn';
import ModSignIn from './pages/moderator/ModSignIn';
import Dashboard from './pages/moderator/ Dashboard';
import { TokenProvider } from './context/AuthContext';
import ModeratorPrivetRoute from './ModeratorPrivetRoute';


function App() {
  return (

    <TokenProvider>
     <Routes>
      <Route element={<Layout/>}>
        <Route path='start' element={<StartPage/>}/>
         <Route path='signIn' element={<SignIn/>}/>
         
            <Route path='moderator' element={<ModeratorPrivetRoute/>} >
                <Route path='signIn' element={<ModSignIn/>}/>
                <Route path='dashboard' element={<Dashboard/>}/>
            </Route>


      </Route>

    </Routes>
    </TokenProvider>

  )
}

export default App
