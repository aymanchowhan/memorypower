import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import About from '../components/About'
import Service from '../components/Service'

function AboutPage() {
  return (
    <>
    <Header/>
    <About />
    <Service />
    <Footer />
    </>
  )
}

export default AboutPage