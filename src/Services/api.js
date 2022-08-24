import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

export const FetchItems = async (errorHanldler) => {
  try {
    const { data } = await instance.get("/items");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    errorHanldler(error);
  }
};

export const addItem = async (itemName, itemPrice, imgUrl, errorHandler) => {
  let name = itemName;
  let price = itemPrice;
  let img = imgUrl;
  try {
    const { data } = await instance.post("/items", {
      name,
      img,
      price,
    });
    return data;
  } catch (error) {
    errorHandler(error);
  }
};
