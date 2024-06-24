import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Cources from '../components/Cources'
import Footer from '../components/Footer'
import Service from '../components/Service'
import Prepare from '../components/Prepare'
import Swiper, { OverView } from '../components/OverView'
import Pinkcontent from '../components/Pinkcontent'
import About from '../components/About'

function HomePage() {
  return (
    <>
      <div className='relative'>
        <div className='fixed z-10 left-0 right-0'>
          <Header />
        </div>
        <div className=' h-[170vh] lg:h-[100vh]'>
          <Hero />
        </div>
        <OverView />
        <Service />
        <Prepare />
        <Pinkcontent/>
        <Cources />
        <About />
        <Footer />
       
      </div>
    </>
  )
}

export default HomePage 