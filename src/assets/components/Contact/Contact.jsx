import React from 'react'
import './Contact.css'
import themePattern from '../../../assets/components/Contact/theme_pattern.svg'
import mailicon from '../../../assets/components/Contact/mail_icon.svg'
import locationicon from '../../../assets/components/Contact/location_icon.svg'
import callicon from '../../../assets/components/Contact/call_icon.svg'
function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8f0d0ac5-ab4d-42c7-b551-f95a05cb0391");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert(res.message)
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={themePattern} alt=''/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mailicon} alt=''/><p>iamvishal6068@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={callicon} alt=''/><p>+91 9517734211</p>
                    </div>
                    <div className="contact-detail">
                        <img src={locationicon} alt=''/><p>Jalandar</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label>Your Name</label> 
                <input type='text' placeholder='Enter your name' name='name'/>
                <label>Your Email</label>
                <input type='email' placeholder='Enter your email' name='email'/>
                <label>Write your message here</label>
                <textarea name='mesaage' rows='8' placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit' >Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
