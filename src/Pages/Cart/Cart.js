import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct/CartProduct";
import { GlobalContext } from "../../ContextAPI/GlobalState";
import cartSvg from "./cartSvg.svg";
import emptyCart from "./emptyCart.svg";
import "./Cart.css";

const Cart = () => {
  const { cartState } = useContext(GlobalContext);
  const PricesInString = cartState.map((item) => item.price);
  const Prices = PricesInString.map((str) => {
    return Number(str);
  });
  console.log(Prices);
  let subTotal = Prices.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="cart">
      {cartState.length === 0 ? (
        <div className="empty-basket">
          <h2>Your Shopping Basket is empty</h2>
          <p>
            {" "}
            You have no items in your basket. To buy one or more click on "Add
            to Basket"
          </p>
          <img className="emptyCartSvg" src={emptyCart} alt="" />
        </div>
      ) : (
        <div>
          <h2 className="cart__title">Your Shopping Basket</h2>

          <div className="cart-container">
            <div className="left">
              {cartState?.map((item, i) => (
                <CartProduct
                  key={i}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              ))}
            </div>
            <div className="right">
              <Card className="card-checkout">
                <CardContent className="card-content">
                  <p>
                    subTotal ( {cartState.length}) :{" "}
                    <strong>Rs: {subTotal}</strong>
                  </p>

                  <Link className="link-to-btn" to="/shipping">
                    <Button className="checkout-btn" variant="contained">
                      Proceed to checkout
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <img className="svg" src={cartSvg} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
