import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  totalPrice: 0,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    toggleToCart: (state, action) => {
      state.allProducts.map((item) => {
        if (item.id === action.payload.id) {
          item.cart = !item.cart;
          item.count = 1;
          return [...state.allProducts, item];
        }
      });
    },
    toggleToFav: (state, action) => {
      state.allProducts.map((item) => {
        if (item.id === action.payload.id) {
          item.favorite = !item.favorite;
          return [...state.allProducts, item];
        }
      });
    },
    increment: (state, action) => {
      state.allProducts.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
          return [...state.allProducts, item];
        }
      });
    },
    decrement: (state, action) => {
      state.allProducts.map((item) => {
        if (item.id === action.payload.id) {
          item.count--;
          return [...state.allProducts, item];
        }
      });
    },
    calTotal: (state) => {
      state.totalPrice = 0;
      state.allProducts?.map((item) => {
        if (item.cart) {
          state.totalPrice = state.totalPrice + item.count * item.price;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getAllProducts,
  toggleToCart,
  toggleToFav,
  calTotal,
  increment,
  decrement,
} = productSlice.actions;

export default productSlice.reducer;
