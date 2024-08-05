import React from 'react'
import './About.css'
import themePattern from '../../../assets/components/About/theme_pattern.svg'
import dp1 from '../../../assets/components/About/dp1.jpg'
function About() {
  return ( 
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={themePattern} alt=''/>
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={dp1} alt=''/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hello! I'm a final year B.Tech student specializing in Computer Science and Engineering.</p>
                    <p>With a passion for technology and coding, I have developed a strong foundation in various web development and programming technologies.</p>
                </div>
                <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Javascript</p> <hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>React JS</p> <hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>MySQL</p> <hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Java</p> <hr style={{width:"50%"}}/></div>

            </div>
            </div>
            
        </div>
      <div className="about-achievements">
        <div className="achievements">
            <h1>Fresher</h1>
            <p>Experience</p>
        </div>
        <hr/>
        <div className="achievements">
            <h1>3+</h1>
            <p>Projects Completed</p>
        </div>
        <hr/>
        <div className="achievements">
            <h1>1+</h1>
            <p>Happy Clients</p>
        </div>
      </div>
    </div>
  )
}

export default About
