import React from 'react'
import './'
import Header from './components/Header/Header'
import Navigate from './components/Navigate/Navigate'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonials'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Navigate />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  )
}

export default App
