import axios from "axios";

export const useProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5173/database.json");
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
