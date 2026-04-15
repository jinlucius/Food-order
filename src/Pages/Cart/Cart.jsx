import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

// 👉 Cart component
// Purpose:
// Cart me added items show karna + total calculate karna

const Cart = () => {

  // 👉 Context se data + functions le rahe hain
  const {
    cartItems,             // 👉 {1:2, 3:1}
    food_list,             // 👉 all food items
    removeFromCart,        // 👉 remove function
    getTotalCartAmount     // 👉 total calculate
  } = useContext(StoreContext);

  // 👉 Navigation hook (page change karne ke liye)
  const navigate = useNavigate();

  return (
    <div className='cart'>

      {/* ================= CART ITEMS LIST ================= */}
      <div className="cart-items">

        {/* 👉 Table heading */}
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <br />
        <hr />

        {/* 👉 food_list loop kar rahe hain */}
        {food_list.map((item, index) => {

          // 👉 Check: item cart me hai ya nahi
          if (cartItems[item.id] > 0) {

            return (
              <div key={index}>

                {/* 👉 Single cart item row */}
                <div className='cart-items-title cart-items-item'>

                  {/* 👉 Item image */}
                  <img src={item.image} alt={item.name} />

                  {/* 👉 Item name */}
                  <p>{item.name}</p>

                  {/* 👉 Single item price */}
                  <p>${item.price}</p>

                  {/* 👉 Quantity */}
                  <p>{cartItems[item.id]}</p>

                  {/* 👉 Total price (price × quantity) */}
                  <p>${item.price * cartItems[item.id]}</p>

                  {/* 👉 Remove button */}
                  <p 
                    onClick={() => removeFromCart(item.id)} 
                    className='cross'
                  >
                    x
                  </p>

                </div>

                <hr />
              </div>
            );
          }

          // 👉 Agar cart me nahi hai → kuch render nahi
          return null;
        })}

      </div>

      {/* ================= CART BOTTOM ================= */}
      <div className="cart-bottom">

        {/* 👉 TOTAL SECTION */}
        <div className="cart-total">

          <h2>Cart Totals</h2>

          <div>

            {/* 👉 Subtotal */}
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>

            <hr />

            {/* 👉 Delivery Fee */}
            <div className="cart-total-details">
              <p>Delivery Fee</p>

              {/* 👉 Agar cart empty → 0, warna 2 */}
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>

            <hr />

            {/* 👉 Final Total */}
            <div className="cart-total-details">
              <b>Total</b>

              <b>
                ${getTotalCartAmount() === 0 
                  ? 0 
                  : getTotalCartAmount() + 2}
              </b>
            </div>

          </div>

          {/* 👉 Checkout button */}
          <button onClick={() => navigate('/order')}>
            Proceed To Checkout
          </button>

        </div>

        {/* 👉 PROMO CODE SECTION */}
        <div className="cart-promocode">

          <p>If you have a promocode, enter it here</p>

          <div className="cart-promocode-input">

            {/* 👉 Input field */}
            <input 
              type='text' 
              placeholder='Enter promocode' 
            />

            {/* 👉 Submit button */}
            <button>Submit</button>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Cart;