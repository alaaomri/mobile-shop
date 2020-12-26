import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchCategories = async () => {
  const { data } = await axios.get(`${BASE_URL}/categories`);
  return data;
};

export const fetchProducts = async (productListId) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/products-lists/${productListId}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const fetchTopProducts = async (subUrl) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${subUrl}`);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const searchProducts = async (query) => {
  const params = {
    q: query,
  };
  try {
    const { data } = await axios.get(`${BASE_URL}/products/`, { params });
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const fetchProductDetails = async (productId) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/products/${productId}`);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const fetchCartData = async (cartId) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/carts/${cartId}`);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const modifyCartData = async (cartId, cart) => {
  try {
    const { data } = await axios.put(`${BASE_URL}/carts/${cartId}`, cart);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const addNewCartData = async (cart) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/carts`, cart);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
