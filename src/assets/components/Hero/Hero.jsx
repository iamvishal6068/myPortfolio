import React from 'react'
import './Hero.css'
import dp1 from '../../../assets/components/Hero/dp1.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  return (
    <div id='home' className='hero'>
      <img src={dp1} alt=''/>
      <h1><span>I'm Vishal,</span> frontend developer based in India. </h1>
      <p>I am a frontend developer from Jalandhar, India. I am a Final Year BTech student, and i am looking for internship to learn technologies so i implement my learnings in my projects. </p>
      <div className="hero-action">
        <div className="hero-connect" ><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
