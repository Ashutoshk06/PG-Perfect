import { useState } from 'react'

import Navbar from './HomePage/Navbar'
// import { Home, Work } from '@mui/icons-material'
import Last from './HomePage/Last'
import Benefits from './HomePage/Benefits'
import Purpose from './HomePage/Purpose'
import Footer from './HomePage/Footer'
import Home from './HomePage/Home'
// import Work from './HomePage/Work'






const HomePage=()=>{
    return(
        <>
         <Navbar/>
       <Home/>
       {/* <Work/> */}
      <Last/>
      <Benefits/>
      <Purpose/>
      <Footer/>
        </>
    )
}

export default HomePage