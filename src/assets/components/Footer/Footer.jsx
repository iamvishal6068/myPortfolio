import React from 'react'
import './Footer.css'
import logo1 from '../../../assets/components/Navbar/logo1.png';
import usericon from '../../../assets/components/Footer/user_icon.svg'
function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo1} alt=''/>
                <p>I am a frontend developer from Jalandhar, India. I am a Final Year BTech student, and i am looking for internship to learn technologies so i implement my learnings in my projects.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={usericon} alt=''/>
                    <input type="email" placeholder='enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
            
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className='footer-bottom-left'>&copy; 2024 Vishal. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Terms of services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
