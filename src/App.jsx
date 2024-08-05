import React from 'react'
import Navbar from './assets/components/Navbar/Navbar'
import Hero from './assets/components/Hero/Hero'
import About from './assets/components/About/About'
import MyWork from './assets/components/MyWork/MyWork'
import Contact from './assets/components/Contact/Contact'
import Footer from './assets/components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
