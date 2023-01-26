import React from 'react';
import './styles/main.css';
import homeimg from './img/home1.gif';
import homecontent from './img/homecontent.png';

const Main = () => {
  return (
    <div className='main-container'>
      <div className='main-content'>
        <div className='display-heading'>
          <div className='main-page-content-left'>
            <br/>
            <h4>Welcome <br/><br/> This is basic template for building React project </h4><br/>
          </div>
          <div className='main-page-content-right'>
            <img src={homeimg} alt="SHowGif"/>
          </div>
        </div>

        <div className='display-mid-detail'>
          <div className='mid-detail-left'>
            <img src={homecontent} alt="ShowPng"/>
          </div>
          <div className='mid-detail-right'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales ut etiam sit. In ornare quam viverra orci. Donec adipiscing tristique risus nec. Fusce ut placerat orci nulla pellentesque. Turpis egestas maecenas pharetra convallis posuere morbi leo. Ultrices dui sapien eget mi proin. Sit amet mauris commodo quis imperdiet massa. Nec ultrices dui sapien eget mi proin sed. Mi ipsum faucibus vitae aliquet nec ullamcorper. Augue neque gravida in fermentum et sollicitudin ac orci phasellus.<br/><br/>
            Turpis egestas maecenas pharetra convallis posuere morbi leo. Ultrices dui sapien eget mi proin. Sit amet mauris commodo quis imperdiet massa. Nec ultrices dui sapien eget mi proin sed. Mi ipsum faucibus vitae aliquet nec ullamcorper. Augue neque gravida in fermentum et sollicitudin ac orci phasellus.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Main