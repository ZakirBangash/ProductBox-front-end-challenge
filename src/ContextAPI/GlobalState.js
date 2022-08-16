import React, { useReducer, createContext } from "react";
import { reducer } from "./reducer";

const initialState = {
  cart: [
    {
      id: "343243452",
      title: "New apple phone with best price",
      price: 453.99,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-green-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1566956144838",
    },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, initialState);

  function addItemForSale(itemObject) {
    dispatch({
      type: "AddItemForSale",
      payload: {
        Amount: itemObject.Amount,
        text: itemObject.text,
        id: itemObject.id,
      },
    });
  }

  function deleteItem(id) {
    console.log(id);
    dispatch({
      type: "DeleteItem",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        initialState: state,
        addItemForSale,
        deleteItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
