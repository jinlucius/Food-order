import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

// 👉 FoodDisplay component
// Props:
// category -> currently selected category (ExploreMenu se aa rahi hai)

const FoodDisplay = ({ category }) => {

  // 👉 Context se data le rahe hain (global state)
  // food_list me saare food items hain
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>

      {/* 👉 Heading */}
      <h2>Top dishes near you</h2>

      {/* 👉 Food items container */}
      <div className="food-display-list">

        {/* 👉 food_list ko loop (map) kar rahe hain */}
        {food_list.map((item, index) => {

          // 👉 Condition check:
          // Agar category "All" hai → sab show karo
          // ya agar item ki category match karti hai → tab show karo
          if (category === "All" || category === item.category) {

            // 👉 Har item ke liye FoodItem component render hoga
            return (
              <FoodItem
                key={index} // 👉 unique key (React ko help karta hai re-render me)

                // 👉 props pass kar rahe hain child component me
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }

          // 👉 Agar condition false hai → kuch return nahi (item hide ho jayega)
          return null;

        })}

      </div>
    </div>
  );
};

export default FoodDisplay;