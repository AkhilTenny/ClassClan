import React from 'react'
import Header from './components/Header';
import AddClassModal from './components/AddClassModal';


function  Dashboard() {
 
  return (
    <div className="h-screen bg-[url('./assets/background.jpg')] bg-cover bg-center">
      <Header/>
      <div >
        <div className='pt-5'>
        <h1 className='text-xl ml-3 font-bold cursor-pointer'>Your classes:</h1>
        </div>
        <div className='w-full  px-5 '>
          <div className='rounded-md bg-gradient-to-r mt-5 from-customBlue-2 to-customPink-3 h-10 w-full opacity-65 shadow-md flex items-center justify-between'>
            <h1 className='ml-5'> S1 CT</h1>
            <button className='shadow-xl p-px bg-gradient-to-b from-customBlue-3 px-2 to-customBlue-6 mr-5 rounded-md '>Edit</button>

          </div>
          <div className='rounded-md bg-gradient-to-r mt-5 from-customBlue-2 to-customPink-3 h-10 w-full opacity-65 shadow-md flex items-center justify-between'>
            <h1 className='ml-5'>S3 CT</h1>
            <button className='shadow-xl p-px bg-gradient-to-b from-customBlue-3 px-2 to-customBlue-6 mr-5 rounded-md '>Edit</button>

          </div>
          <div className='rounded-md bg-gradient-to-r mt-5 from-customBlue-2 to-customPink-3 h-10 w-full opacity-65 shadow-md flex items-center justify-between'>
            <h1 className='ml-5'>S6 CT</h1>
            <button className='shadow-xl p-px bg-gradient-to-b from-customBlue-3 px-2 to-customBlue-6 mr-5 rounded-md '>Edit</button>

          </div>

        </div>

        </div >
        <div className='p-5 w-min flex align-top '>

        <button className='shadow-xl h-min w-28 mt-4 p-px bg-gradient-to-b from-customPink-4 px-2 to-customPink-5 mr-5 rounded-md '>Add Class +</button>
        <AddClassModal/>

      </div>
    </div>
  )
}

export default Dashboard
