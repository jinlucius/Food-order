import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

// 👉 FoodItem component
// Props:
// id, name, price, description, image

const FoodItem = ({ id, name, price, description, image }) => {

  // 👉 Context se cart data + functions le rahe hain
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='food-item'>

      {/* ================= IMAGE SECTION ================= */}
      <div className="food-item-img-container">

        {/* 👉 Food image */}
        <img className='food-item-image' src={image} alt={name} />

        {/* 👉 Agar item cart me nahi hai */}
        {!cartItems[id] ? (

          // 👉 Add button (plus icon)
          <img
            className='add'
            onClick={() => addToCart(id)}   // 👉 add function call
            src={assets.add_icon_white}
            alt="add"
          />

        ) : (

          // 👉 Agar item cart me hai → counter show karo
          <div className='food-item-counter'>

            {/* 👉 Remove button */}
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="remove"
            />

            {/* 👉 Current quantity */}
            <p>{cartItems[id]}</p>

            {/* 👉 Add button */}
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="add"
            />

          </div>
        )}
      </div>

      {/* ================= INFO SECTION ================= */}
      <div className="food-item-info">

        {/* 👉 Name + rating */}
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_stars} alt="rating" />
        </div>

        {/* 👉 Description */}
        <p className='food-item-desc'>{description}</p>

        {/* 👉 Price */}
        <p className='food-item-price'>${price}</p>

      </div>
    </div>
  );
};

export default FoodItem;