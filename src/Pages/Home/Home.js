import React from "react";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div>
        <ButtonComponent link="/browseItems" linkName="Browse Items" />
        <ButtonComponent link="/cart" linkName="Cart" />
        <ButtonComponent link="/add-item" linkName="Add new Item" />
      </div>
    </div>
  );
};

export default Home;
