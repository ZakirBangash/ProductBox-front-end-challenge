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
