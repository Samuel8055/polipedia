import React from 'react';
import '../assets/css/Banner.css';
import state_banner from '../assets/images/banner1.jpg';
import district_banner from '../assets/images/banner2.jpg';

export default function Banner(props) {

  let banner = "";

  if (props.curr_url === 'http://localhost:3000/district') {
    banner = district_banner;
  } else {
    banner = state_banner;
  }

  return (
    <div className="banner-container">
      <img src={banner} height="500" alt="Karnataka" />
    </div>
  )
  
}