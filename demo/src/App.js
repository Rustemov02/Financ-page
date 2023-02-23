import React from 'react'
import { Stack } from '@mui/system'

import Header from './Header'
import About from './About'
import Shopping from './Shopping'
import Meet from './Meet'
import Services from './Services'
import Gallery from './Gallery'
import OurWork from './OurWork'
import Customers from './Customers'


export default function App() {
 

  return (
    <>
      <Header />  
      <About /> 
      <Shopping/>
      <Meet/>
      <Gallery/>
      <OurWork/>
      <Services/>
      <Customers/>
    </>
  )
}