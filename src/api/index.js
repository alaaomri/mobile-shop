import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchCategories = async () => {
  const { data } = await axios.get(`${BASE_URL}/categories`);
  return data;
};

export const fetchProducts = async (productListId) => {
  const { data } = await axios.get(
    `${BASE_URL}/products-lists/${productListId}`
  );
  return data;
};

export const fetchTopProducts = async (subUrl) => {
  const { data } = await axios.get(`${BASE_URL}/${subUrl}`);
  return data;
};

export const searchProducts = async (query) => {
  const params = {
    q: query,
  };

  const { data } = await axios.get(`${BASE_URL}/products/`, { params });
  return data;
};

export const fetchProductDetails = async (productId) => {
  const { data } = await axios.get(`${BASE_URL}/products/${productId}`);
  return data;
};

export const fetchCartData = async (cartId) => {
  const { data } = await axios.get(`${BASE_URL}/carts/${cartId}`);
  return data;
};

export const modifyCartData = async (cartId, cart) => {
  const { data } = await axios.put(`${BASE_URL}/carts/${cartId}`, cart);
  return data;
};

export const addNewCartData = async (cart) => {
  const { data } = await axios.post(`${BASE_URL}/carts`, cart);
  return data;
};

export const deleteCart = async (cartId) => {
  const data = await axios
    .delete(`${BASE_URL}/carts/${cartId}`)
    .then((response) => response.data)
    .catch((err) => Promise.reject(err));
  return data;
};

export const placeOrder = async (order, cartId) => {
  const data = await axios
    .post(`${BASE_URL}/orders`, order)
    .then((res) => {
      deleteCart(cartId);
    })
    .catch((err) => Promise.reject(err));
  return data;
};
