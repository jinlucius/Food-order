import React, { useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';

// 👉 LoginPopUp component
// Props:
// setShowLogin -> popup close/open control

const LoginPopUp = ({ setShowLogin }) => {

  // 👉 State to toggle between Login & Sign Up
  const [currState, setCurrState] = useState("Sign Up");

  return (

    // 👉 Full screen popup container
    <div className='login-popup'>

      {/* 👉 Form container */}
      <form className="login-popup-container">

        {/* ================= HEADER ================= */}
        <div className="login-popup-title">

          {/* 👉 Title dynamically change ho raha hai */}
          <h2>{currState}</h2>

          {/* 👉 Close button (cross icon) */}
          <img 
            onClick={() => setShowLogin(false)} 
            src={assets.cross_icon} 
            alt="close" 
          />
        </div>

        {/* ================= INPUT FIELDS ================= */}
        <div className="login-popup-inputs">

          {/* 👉 Agar Login hai → name field hide */}
          {/* 👉 Agar Sign Up hai → name field show */}
          {currState === "Login" 
            ? <></> 
            : <input type="text" placeholder='Your name' required />
          }

          {/* 👉 Email */}
          <input type="email" placeholder='Enter your email' required />

          {/* 👉 Password */}
          <input type="password" placeholder='Your password' required />

        </div>

        {/* ================= BUTTON ================= */}
        <button>
          {/* 👉 Button text bhi state ke hisaab se change */}
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* ================= TERMS ================= */}
        <div className="login-popup-condition">

          {/* 👉 Checkbox (required) */}
          <input type="checkbox" required />

          <p>
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>

        {/* ================= TOGGLE LOGIN / SIGNUP ================= */}

        {currState === "Login" ? (

          // 👉 Agar Login mode me hai
          <p>
            Create a new account? 
            <span onClick={() => setCurrState("Sign Up")}>
              Click here
            </span>
          </p>

        ) : (

          // 👉 Agar Sign Up mode me hai
          <p>
            Already have an account? 
            <span onClick={() => setCurrState("Login")}>
              Login here
            </span>
          </p>

        )}

      </form>
    </div>
  );
};

export default LoginPopUp;