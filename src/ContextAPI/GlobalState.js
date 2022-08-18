import React, { useReducer, createContext } from "react";
import { addressReducer } from "./AddressReducer";
import { reducer } from "./reducer";

const cartState = [];
const addressState = [];

// Create Context
export const GlobalContext = createContext(cartState);

export const GlobalProvider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, cartState);
  let [AddressState, Addressdispatch] = useReducer(
    addressReducer,
    addressState
  );

  function addItemToCart(id, title, price, image) {
    dispatch({
      type: "AddItemToCart",
      payload: {
        id,
        title,
        price,
        image,
      },
    });
  }

  function deleteItem(id) {
    console.log("this is id", id);
    dispatch({
      type: "DeleteItem",
      payload: id,
    });
  }

  function addShippingAddress(name, city, address, country) {
    Addressdispatch({
      type: "AddShippingAddress",
      payload: {
        name,
        city,
        address,
        country,
      },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        cartState: state,
        addItemToCart,
        deleteItem,
        addressState: AddressState,
        addShippingAddress,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
