import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import AddClassModal from './components/AddClassModal';
import { useApi } from '../../action/api/moderatorAPIs';
import ModeratorClassCard from './components/ModeratorClassCard';





function  Dashboard() {
  const {getClassList} = useApi()

  const [classList,setClassList]  = useState([])
  
  useEffect(()=>{
    getClassList().then(res=>{ 
      setClassList(res.data.classList)
    })
  
        
        
        
        
  },[])
 
  return (
    <div className="h-screen bg-[url('./assets/background.jpg')] bg-cover bg-center">
      <Header/>
      <div >
        <div className='pt-5'>
        <h1 className='text-xl ml-3 font-bold cursor-pointer'>Your classes:</h1>
        </div>
        {
          classList.map((item,index)=>(
            <ModeratorClassCard key={index} class={item}/>
          ))
        }
       

        </div >
        <div className='p-5 w-min flex align-top '>

        <button className='shadow-xl h-min w-28 mt-4 p-px bg-gradient-to-b from-customPink-4 px-2 to-customPink-5 mr-5 rounded-md '>Add Class +</button>
        <AddClassModal/>

      </div>
    </div>
  )
}

export default Dashboard
