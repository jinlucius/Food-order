import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';

// 👉 PlaceOrder component
// Purpose:
// User ka delivery form + cart total show karna

const PlaceOrder = () => {

  // 👉 Context se function le rahe hain (total calculate karne ke liye)
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className='place-order'>

      {/* ================= LEFT SIDE (FORM) ================= */}
      <div className="place-order-left">

        {/* 👉 Heading */}
        <p className='title'>Delivery Information</p>

        {/* 👉 First + Last name (2 inputs ek row me) */}
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>

        {/* 👉 Email */}
        <input type="text" placeholder='Email' />

        {/* 👉 Address */}
        <input type="text" placeholder='Street' />

        {/* 👉 City + State */}
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>

        {/* 👉 Zip + Country */}
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>

        {/* 👉 Phone number */}
        <input type="text" placeholder='Phone' />

      </div>

      {/* ================= RIGHT SIDE (TOTAL) ================= */}
      <div className="place-order-right">

        <div className="cart-total">

          {/* 👉 Heading */}
          <h2>Cart Totals</h2>

          <div>

            {/* 👉 Subtotal */}
            <div className="cart-total-details">
              <p>Subtotal</p>

              {/* 👉 Function call ho raha hai (context se) */}
              <p>${getTotalCartAmount()}</p>
            </div>

            <hr />

            {/* 👉 Delivery Fee */}
            <div className="cart-total-details">
              <p>Delivery Fee</p>

              {/* 👉 Agar cart empty hai → 0
                  warna → 2 */}
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>

            <hr />

            {/* 👉 Final Total */}
            <div className="cart-total-details">
              <b>Total</b>

              {/* 👉 Agar cart empty hai → 0
                  warna → subtotal + delivery */}
              <b>
                ${getTotalCartAmount() === 0 
                  ? 0 
                  : getTotalCartAmount() + 2}
              </b>
            </div>

          </div>

          {/* 👉 Button (payment ke liye) */}
          <button>Proceed To Payment</button>

        </div>
      </div>

    </form>
  );
};

export default PlaceOrder;