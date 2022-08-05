import axios from "axios";
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_ID,
  ADD_PRODUCTS,
  CLEAN_PRODUCTS_DETAILS,
} from "./types";

export const getAllRecives = () => {
  return async function (dispatch: any) {
    try {
      const products = await axios.get("http://localhost:3001/products");
      return dispatch({
        type: GET_ALL_PRODUCTS,
        payload: products.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addProducts = (props: any) => {
  return async function (dispatch: any) {
    try {
      const r = await axios.post("http://localhost:3001/createproducts", props);
      console.log(r.data);
     return dispatch({ type: ADD_PRODUCTS, payload: r.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProductById = (id: any) => {
  return async function (dispatch: any) {
    try {
      const r = await axios.get(`http://localhost:3001/products/${id}`);
      return dispatch({ type: GET_PRODUCTS_ID, payload: r.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const cleanDetailsProducts = () => {
  return async function () {
    try {
      console.log("MSG");
      return { type: CLEAN_PRODUCTS_DETAILS };
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteProducts = (id:any) => {
  return async function (dispatch:any) {
    try {
      await axios.delete(`http://localhost:3001/products/${id}`);
      dispatch(getAllRecives());
    } catch (err) {
      console.log(err);
    }
  };
};

export const editProducts = (id: any, props: any) => {
  return async function (dispatch: any) {
    try {
      await axios.put(`http://localhost:3001/editproducts/${id}`,props);
      dispatch(getAllRecives());
    } catch (err) {
      console.log(err);
    }
  };
};

export const isAdmin = () => {
  return async function (dispatch: any) {
    try {
      
      dispatch({type: 'IS_ADMIN'})
    } catch(err) {
      console.log(err)
    }
  }
}