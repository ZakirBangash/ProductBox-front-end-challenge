import React from "react";
import "./Product.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Product = ({ id, title, price, rating, image }) => {
  const addToBasket = () => {
    console.log("Added ");
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
        <Button onClick={addToBasket}>Add to Basket</Button>
      </CardContent>
    </Card>
  );
};

export default Product;
