import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

// 👉 Home component (main landing page)
const Home = () => {

  // 👉 State to track selected category
  // Default = "All" (sab items show honge)
  const [category, setCategory] = useState("All");

  return (
    <div>

      {/* 👉 Top banner / hero section */}
      <Header />

      {/* 👉 Menu categories (user yahan click karega) */}
      {/* 👉 category + setCategory pass kar rahe hain */}
      <ExploreMenu 
        category={category} 
        setCategory={setCategory} 
      />

      {/* 👉 Food items show ho rahe hain */}
      {/* 👉 selected category ke basis pe filter hoga */}
      <FoodDisplay category={category} />

      {/* 👉 App download section */}
      <AppDownload />

    </div>
  );
};

export default Home;