import React from 'react';
import {Link} from 'react-router-dom';
import './styles/footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='main-footer-container'>
        <div className='main-footer-left'>
          <p>.</p>
        </div>
        <div className='main-footer-right'>
          <p><Link to='/'>About</Link></p>
          <p><Link to='/'>Contact</Link></p>
          <p><Link to='/'>Purpose</Link></p>
          <p><a href='https://www.linkedin.com/in/shreyash-kumar-51sk998p1' target="_blank">Developer</a></p>
        </div>
      </div>
      <div className='sub-footer-container'>
        <p>@ Copyright 2023</p>
      </div>
    </div>
  )
}

export default Footer