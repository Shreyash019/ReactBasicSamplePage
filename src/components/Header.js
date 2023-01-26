import React from 'react'
import {Link} from 'react-router-dom';
import Main from './Main';
import About from './About';

import './styles/header.css';

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header-title'>
            <Link to='/' element={Main}>Home</Link>
        </div>
        <div className='header-navopt'>
            <Link to='/about' element={About}>About</Link>
        </div>
    </div>
  )
}

export default Header