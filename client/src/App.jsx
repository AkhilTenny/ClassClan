import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { TokenProvider } from './context/AuthContext';
import { UserTokenProvider } from './context/userAuthContext';
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
import SubjectsList from './pages/moderator/SubjectsList';
import UserPrivetRoute from './UserPrivetRoute';
import Home from './pages/user/Home';
import UploadNotes from './pages/user/UploadNotes';


function App() {
  return (
   <TokenProvider>
       <UserTokenProvider>
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
                    <Route path='editClass/:id/subjectsList' element={<SubjectsList/>}/>
                    
                </Route> 
            <Route element={<UserPrivetRoute/>} >
              <Route path='' element={<Home/>}/>
              <Route path='uploadnotes' element={<UploadNotes/>}/>
            </Route>
          </Route>

        </Routes>
      </UserTokenProvider> 
    
      </TokenProvider>
     

  )
}

export default App
