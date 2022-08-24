import React, { useState } from "react";
import { useErrorHandler } from "react-error-boundary";
import Button from "@mui/material/Button";
import { addItem } from "../../Services/api";
import InputLabel from "../../Components/InputLabel";
import "./AddItem.css";

export default function AddItem(props) {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [imgUrl, setImageUrl] = useState("");
  const errorHanldler = useErrorHandler();

  const submitHandler = async (event) => {
    event.preventDefault();

    const data = await addItem(itemName, itemPrice, imgUrl, errorHanldler);
    if (data) {
      alert("Item Added Successfully");
      setItemName("");
      setItemPrice("");
      setImageUrl("");
    }
  };

  return (
    <div className="addItemScreen">
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1 className="addItem-heading">Add item for sale</h1>
        </div>

        <InputLabel
          name={itemName}
          setItem={setItemName}
          title="Name"
          placeholder="Enter Name"
        />
        <InputLabel
          name={itemPrice}
          setItem={setItemPrice}
          title="Price"
          placeholder=" Enter Price"
        />
        <InputLabel
          name={imgUrl}
          setItem={setImageUrl}
          title="Image URL"
          placeholder="Enter Image URL"
        />
        <div>
          <Button onClick={submitHandler} className="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
