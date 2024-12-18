import React from 'react'
import { Routes, Route } from "react-router-dom";
import { TokenProvider } from './context/AuthContext';
//page imports
import StartPage from './pages/user/StartPage';
import Layout from "./Layout"
import SignIn from './pages/user/SignIn';
import ModSignIn from './pages/moderator/ModSignIn';
import Dashboard from './pages/moderator/ Dashboard';
import ModeratorPrivetRoute from './ModeratorPrivetRoute';
import EditClass from './pages/moderator/EditClass';
import StudentsList from './pages/moderator/StudentsList';
import AddStudent from './pages/moderator/AddStudent';


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
                <Route path="editClass/:id" element={<EditClass/>}/>
                <Route path="editClass/:id/studentsList" element={<StudentsList/>}/>
                <Route path="editClass/:id/addStudent" element={<AddStudent/>}/>



                
            </Route>
      </Route>


      </Routes>

    </TokenProvider>

  )
}

export default App
