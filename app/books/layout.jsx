import React from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';

const layout = ({children}) => {
  return (
    <div className='root-container text-white'>
      <div className=''>
      <Navbar/>
        </div>
      
      <Header/>
      <div className='mt-20'>
      {children}

      </div>
      
    </div>
  )
}

export default layout
