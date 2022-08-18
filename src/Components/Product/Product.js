import React, { useContext } from "react";
import "./Product.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { GlobalContext } from "../../ContextAPI/GlobalState";

const Product = ({ id, title, price, image }) => {
  const { addItemToCart } = useContext(GlobalContext);

  const addItemToBasket = () => {
    addItemToCart(id, title, price, image);
  };

  return (
    <Card className={`product-card`} variant="outlined">
      <div className="card-img">
        <img src={image} alt={title} />
      </div>

      <CardContent className="product">
        <div className="product__info">
          <p className="product-title">{title}</p>
          <div className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </div>
        </div>
        <Button onClick={() => addItemToBasket()}>Add to Basket</Button>
      </CardContent>
    </Card>
  );
};

export default Product;
