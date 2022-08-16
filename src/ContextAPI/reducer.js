export const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "AddItemForSale": {
      return [...state, action.payload];
    }
    case "DeleteItem": {
      const newState = state.filter((trans) => trans.id !== action.payload);
      console.log(newState);
      return newState;
    }
    default:
      return state;
  }
};
