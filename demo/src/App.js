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
import Pricing from './Pricing/Pricing'
import Bank from './Bank'
import Contact from './Contact'

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
      <Pricing/>
      <Bank/>
      <Contact/>
    </>
  )
}