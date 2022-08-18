import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

export const FetchItems = async () => {
  try {
    const { data } = await instance.get("/items");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addItem = async (itemName, itemPrice, imgUrl) => {
  console.log(itemName, itemPrice, imgUrl);
  let name = itemName;
  let price = itemPrice;
  let img = imgUrl;
  try {
    const { data } = await instance.post("/items", {
      name,
      img,
      price,
    });
    console.log("hello: ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
