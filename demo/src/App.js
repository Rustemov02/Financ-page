import React from 'react'
import Header from './Header'
import About from './About'
import Shopping from './Shopping'
import Meet from './Meet'

import { Stack } from '@mui/system'
import Gallery from './Gallery'

export default function App() {



  return (
    <>
      <Header />
      <About /> 
      <Shopping/>
      <Meet/>
      <Gallery/>
    </>
  )
}