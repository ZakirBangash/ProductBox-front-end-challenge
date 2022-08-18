export const reducer = (state, action) => {
  switch (action.type) {
    case "AddItemToCart": {
      return [...state, action.payload];
    }
    case "DeleteItem": {
      const newState = state.filter((item) => item.id !== action.payload);
      console.log(newState);
      return newState;
    }
    default:
      return state;
  }
};
