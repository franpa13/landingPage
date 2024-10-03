import axios from "axios";
//Traer los cafes
export const useProductsCoffes = async () => {
  try {
    const response = await axios.get("https://fakeapirimberio.vercel.app/coffees");
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};


export const useProductsBakery = async () => {
  try {
    const response = await axios.get("https://fakeapirimberio.vercel.app/bakery");
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
