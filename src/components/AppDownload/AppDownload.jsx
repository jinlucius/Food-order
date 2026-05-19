import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

// 👉 AppDownload component
// Purpose:
// User ko app download karne ke liye UI dikhana (Play Store + App Store)

const AppDownload = () => {
  return (

    // 👉 Main container (section wrap kar raha hai)
    <div className="app-download" id="app-download">

      {/* 👉 Text / Heading */}
      <p>
        For better experience Download <br /> Tomato App
      </p>

      {/* 👉 Download buttons container */}
      <div className="app-download-platforms">

        {/* 👉 Play Store icon/image */}
        <img 
          src={assets.play_store}   // 👉 image assets file se aa rahi hai
          alt="Play Store"          // 👉 accessibility ke liye
        />

        {/* 👉 App Store icon/image */}
        <img 
          src={assets.app_store}    // 👉 image assets se
          alt="App Store"
        />

      </div>

    </div>
  );
};

export default AppDownload;