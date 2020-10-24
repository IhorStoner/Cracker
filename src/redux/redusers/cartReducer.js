import { createReducer } from "@reduxjs/toolkit";
import { addProductToCart,removeProductFormCart } from '../actions/cartAction'

let initialState;

try {
  initialState = JSON.parse(localStorage.getItem('cart') || '[]')
} catch (e) {
  console.log('Local storage is empty')
}

export const cartReducer = createReducer(initialState, {
  [addProductToCart.type]: (state, action) => {
    state.push(action.payload)
  },
  [removeProductFormCart.type]: (state, action) => {
    const basketProductIndex = state.findIndex(cartProduct => cartProduct.id === action.payload);
    state.splice(basketProductIndex, 1);
  }
});

export default cartReducer;