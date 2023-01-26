import React from 'react';
import './styles/contact.css';
import contactimg from './img/logon.png'
import { NavLink } from 'react-router-dom';

const Contact = () => {
  const handleSubmit = ()=>{
    alert('Message Sent');
  }

  return (
    <div className='contact-container'>
      <div className='contact-content'>
      <br/><h2>Contact</h2>
        <div className='contact-from-left'>
          <form>
            <input type="email" name="email" placeholder='Email'/><br/>
            <textarea type="text" name="msg" placeholder='Message'></textarea><br/>
            <button onClick={handleSubmit}>Send</button>
          </form>
        </div>
        <div className='conatct-img-right'>
          <img src={contactimg}/>
        </div>
        
      </div>

    </div>
  )
}

export default Contact