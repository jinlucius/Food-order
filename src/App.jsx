import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import LoginPopUp from './components/LoginPopUp/LoginPopUp';
import Footer from './components/Footer/Footer'; // 👉 (missing tha, add kiya)

// 👉 Main App component (root component)
const App = () => {

  // 👉 State to control login popup visibility
  // false = hidden, true = visible
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* 👉 Agar showLogin true hai toh popup dikhao */}
      {/* 👉 nahi toh kuch bhi render nahi hoga */}
      {showLogin ? (
        <LoginPopUp setShowLogin={setShowLogin} />
      ) : (
        <></>
      )}

      {/* 👉 Main app container */}
      <div className='app'>

        {/* 👉 Navbar har page pe dikh raha hai */}
        {/* 👉 setShowLogin pass kar rahe hain taki navbar se popup open ho sake */}
        <Navbar setShowLogin={setShowLogin} />

        {/* 👉 Routing system (page switch hota hai URL ke basis pe) */}
        <Routes>

          {/* 👉 Home page (default route "/") */}
          <Route path='/' element={<Home />} />

          {/* 👉 Cart page */}
          <Route path='/cart' element={<Cart />} />

          {/* 👉 Order / Checkout page */}
          <Route path='/order' element={<PlaceOrder />} />

        </Routes>
      </div>

      {/* 👉 Footer har page ke niche show hoga */}
      <Footer />
    </>
  );
};

export default App;