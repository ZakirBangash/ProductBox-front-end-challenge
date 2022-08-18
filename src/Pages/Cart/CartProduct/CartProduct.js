import React, { useContext } from "react";
import "./CartProduct.css";
import Button from "@mui/material/Button";
import { GlobalContext } from "../../../ContextAPI/GlobalState";

const CartProduct = ({ id, title, price, image }) => {
  const { deleteItem } = useContext(GlobalContext);

  const removeFromBasket = () => {
    deleteItem(id);
  };

  return (
    <div className="cartProduct">
      <img className="cartProduct__image" src={image} alt="" />
      <div className="cartProduct__info">
        <h4 className="cartProduct__title">{title}</h4>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <Button onClick={removeFromBasket}>Remove from basket</Button>
      </div>
    </div>
  );
};

export default CartProduct;
