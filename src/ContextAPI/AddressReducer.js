export const addressReducer = (state, action) => {
  console.log("Zakir", state);
  switch (action.type) {
    case "AddShippingAddress": {
      return [state, action.payload];
    }

    default:
      return state;
  }
};
