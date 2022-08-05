import { combineReducers } from "redux";
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_ID,
  CLEAN_PRODUCTS_DETAILS,
} from "./types";

const initialData = {
  allProducts: [],
  allBrands: [],
  assistantProducts: [],
  productsDetail: [],
  isAdmin: false
};

 function rootReducer(state = initialData, action: any) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        assistantProducts: action.payload,
      };
    case GET_PRODUCTS_ID:
      return { ...state, pokemon: action.payload };
    
    case CLEAN_PRODUCTS_DETAILS :
        return{...state, allProducts: [],}  
    case 'IS_ADMIN' :
      return{isAdmin: true}    
  
    default:
      return  state ;
  }
}

export default combineReducers({rootReducer});