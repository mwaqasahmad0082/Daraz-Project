import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------
const defaultState = {
  isLoading: false,
  error: null,
  cartItems: []
};

const slice = createSlice({
  name: 'cart',
  initialState: defaultState,
  reducers: {
    resetCartState: () => defaultState,

    startCartLoading(state) {
      state.isLoading = true;
    },

    stopCartLoading(state) {
      state.isLoading = false;
    },

    hasCartError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    addCartItems(state, action) {
      state.cartItems = [...state.cartItems, action.payload];
    },

    removeCartItems(state, action) {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    }
  },
});

// Action creators
export const { resetCartState, startCartLoading, stopCartLoading, hasCartError, addCartItems, removeCartItems } = slice.actions;

// Reducer
export default slice.reducer;


export const getCountOfCart = (state) => state.cart.cartItems.length
export const getCartItems = (state) => state.cart.cartItems






