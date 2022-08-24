import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { GlobalContext } from "../../ContextAPI/GlobalState";
import "./OrderScreen.css";

export default function PlaceOrderScreen(props) {
  const { cartState, addressState } = useContext(GlobalContext);
  const PricesInString = cartState.map((item) => item.price);
  const Prices = PricesInString.map((str) => {
    return Number(str);
  });

  let subTotal = Prices.reduce((acc, item) => (acc += item), 0).toFixed(2);
  let shippingPrice = 300;
  let taxPrice = 100;
  let TotalPrice = subTotal + shippingPrice + taxPrice;

  return (
    <div className="placeOrderPage">
      <div className="placeOrder">
        <div className="order-left">
          <Card className="order-card">
            <CardContent>
              <h2>Shipping</h2>
              <p>
                <strong>Name:</strong> {addressState[1]?.name} <br />
                <strong>Address: </strong> {addressState[1]?.country} ,{" "}
                {addressState[1]?.city}, {addressState[1]?.address},
              </p>
            </CardContent>
          </Card>
          <Card className="order-card">
            <CardContent>
              <h2>Payment</h2>
              <p>
                <strong>Method:</strong> Cash on Delivery
              </p>
            </CardContent>
          </Card>

          <Card className="order-card">
            <CardContent>
              <h2>Order Items</h2>
              {cartState.map((item, i) => (
                <img
                  key={i}
                  src={item.image}
                  alt={item.name}
                  className="small"
                />
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="order-right">
          <Card>
            <CardContent className="order-content">
              <h2>Order Summary</h2>
              <p>
                <strong>Items</strong> $3532
              </p>
              <p>
                <strong>Shipping Price</strong> $300
              </p>
              <p>
                <strong>Tax</strong> $100
              </p>
              <p>
                <strong>Order Total</strong> ${TotalPrice}
              </p>
              <Button className="order-btn"> Place Order</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
