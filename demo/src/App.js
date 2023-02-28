import React from 'react' 

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
import Blog from './Blog'
import Contact from './Contact'
import Footer from './Footer'
import HeaderSlide from './HeaderSlide'

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
      <Blog/>
      <Contact/>
      <Footer/> 
    </>
  )
}