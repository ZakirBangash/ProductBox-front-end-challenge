import React from "react";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
        alt=""
      />
      <div className="home_btn">
        <ButtonComponent link="/browseItems" linkName="Browse Items" />
        <ButtonComponent link="/cart" linkName="Cart" />
        <ButtonComponent link="/addItem" linkName="Add new Item" />
      </div>
    </div>
  );
};

export default Home;
