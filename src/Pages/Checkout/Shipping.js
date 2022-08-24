import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { GlobalContext } from "../../ContextAPI/GlobalState";
import InputLabel from "../../Components/InputLabel";
import "./Shipping.css";

export default function ShippingAddressScreen(props) {
  let navigate = useNavigate();
  const { addShippingAddress } = useContext(GlobalContext);

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addShippingAddress(fullName, city, address, country);
    navigate("/order");
  };
  return (
    <div className="shipping">
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <InputLabel
          name={fullName}
          setItem={setFullName}
          title="Name"
          placeholder="Enter Full Name"
        />
        <InputLabel
          name={address}
          setItem={setAddress}
          title="Enter Address"
          placeholder="Enter address"
        />

        <InputLabel
          name={city}
          setItem={setCity}
          title="City"
          placeholder="Enter City"
        />
        <InputLabel
          name={postalCode}
          setItem={setPostalCode}
          title="Postal Code"
          placeholder="Enter postal code"
        />

        <InputLabel
          name={country}
          setItem={setCountry}
          title="Country"
          placeholder="Enter country"
        />
        <div>
          <label />
          <Button className="primary" type="submit">
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
}
