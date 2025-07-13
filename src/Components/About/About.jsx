import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return(
    <div className='about' id="about">
      <div className="about-left">
        <img src={about_img} alt="" className='about_img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>cccccccccccccccc</h3>
        <h2>mmmmmmmmmmmmmmmmmmmmmmmm</h2>
        <p>gggggggggggggggggggggggggggggggggggggggg</p>
        <p>ffffffffffffffffffffffffffffffffffffffff</p>
        <p>gggggggggggggggggggggggggggggggggggggggg</p>
      </div>
    </div>
  )
}

export default About
