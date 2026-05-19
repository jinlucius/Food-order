import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

// 👉 ExploreMenu component
// Props:
// category -> current selected category
// setCategory -> function to update category
const ExploreMenu = ({ category, setCategory }) => {

  // 👉 Function to handle category click
  const handleCategoryClick = (menuName) => {

    // 👉 Agar user same category dobara click kare
    // toh usse "All" pe reset kar do
    if (category === menuName) {
      setCategory("All");
    } else {
      // 👉 Nahi toh new category set karo
      setCategory(menuName);
    }
  };

  return (
    <div className='explore-menu' id='explore-menu'>

      {/* 👉 Heading */}
      <h1>Explore our menu</h1>

      {/* 👉 Description text */}
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring delicious food items
      </p>

      {/* 👉 Menu list container */}
      <div className="explore-menu-list">

        {/* 👉 menu_list array ko loop (map) kar rahe hain */}
        {menu_list.map((item, index) => {

          return (
            <div
              key={index} // 👉 unique key for React rendering
              className='explore-menu-list-item'

              // 👉 Jab item pe click hoga
              // toh handleCategoryClick function call hoga
              onClick={() => handleCategoryClick(item.menu_name)}
            >

              {/* 👉 Image of menu item */}
              <img
                src={item.menu_image}
                alt={item.menu_name}

                // 👉 Agar current category match kare
                // toh "active" class add hogi (highlight ke liye)
                className={category === item.menu_name ? "active" : ""}
              />

              {/* 👉 Menu name */}
              <p>{item.menu_name}</p>

            </div>
          );
        })}

      </div>

      {/* 👉 Divider line */}
      <hr />

    </div>
  );
};

export default ExploreMenu;