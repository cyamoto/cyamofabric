import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>aiuiuiuiu <img src={msg_icon} alt="" /></h3>
        <p>cccccccccccccsssssssssssssssssssssssssccccccccccccccccccccsssssssss</p>
        <ul>
            <li><img src={msg_icon} alt="" />Contact@GreatStack.dev</li>
            <li><img src={msg_icon} alt="" />Contact@GreatStack.dev</li>
            <li><img src={msg_icon} alt="" />Contact@GreatStack.dev</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
            <label>Your name</label>
            <input type="text" name='name' placheholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placheholder='Enter your mobile number' required/>
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder='nter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
