import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AddItem.css";
import Button from "@mui/material/Button";

export default function AddItem(props) {
  const [itemName, setItemName] = useState(null);
  const [itemPrice, setItemPrice] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="registerScreen">
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1 className="register-heading">Add item for sale</h1>
        </div>

        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setItemName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            placeholder="Enter Price"
            required
            onChange={(e) => setItemPrice(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="url">Image Url</label>
          <input
            type="text"
            id="url"
            placeholder="Enter image url"
            required
            onChange={(e) => setItemPrice(e.target.value)}
          ></input>
        </div>

        <div>
          <label />
          <Button className="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
