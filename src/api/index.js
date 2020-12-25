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

export const searchProduct = async (query) => {
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
