import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

// 👉 Navbar component
// Props:
// setShowLogin -> login popup open karne ke liye

const Navbar = ({ setShowLogin }) => {

  // 👉 Active menu track karne ke liye state
  const [menu, setMenu] = useState("Home");

  // 👉 Context se total cart amount le rahe hain
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='navbar'>

      {/* 👉 Logo (click → home page) */}
      <Link to='/'>
        <img src={assets.logo} alt="logo" className='logo' />
      </Link>

      {/* ================= MENU LINKS ================= */}
      <ul className='navbar-menu'>

        {/* 👉 Home */}
        <Link 
          to='/' 
          onClick={() => setMenu("Home")} 
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>

        {/* 👉 Menu section (scroll) */}
        <a 
          href='#explore-menu' 
          onClick={() => setMenu("Menu")} 
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>

        {/* 👉 App download section */}
        <a 
          href='#app-download' 
          onClick={() => setMenu("Mobile-App")} 
          className={menu === "Mobile-App" ? "active" : ""}
        >
          Mobile App
        </a>

        {/* 👉 Contact section */}
        <a 
          href='#footer' 
          onClick={() => setMenu("Contact-Us")} 
          className={menu === "Contact-Us" ? "active" : ""}
        >
          Contact Us
        </a>

      </ul>

      {/* ================= RIGHT SIDE ================= */}
      <div className='navbar-right'>

        {/* 👉 Search icon */}
        <img src={assets.search_icon} alt="search" />

        {/* 👉 Cart icon + notification dot */}
        <div className='navbar-search-icon'>

          {/* 👉 Cart page link */}
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="cart" />
          </Link>

          {/* 👉 Agar cart empty nahi hai → dot show hoga */}
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>

        </div>

        {/* 👉 Login button */}
        <button onClick={() => setShowLogin(true)}>
          Sign In
        </button>

      </div>

    </div>
  );
};

export default Navbar;