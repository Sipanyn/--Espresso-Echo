import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getAllProducts } = ProductsSlice.actions;

export default ProductsSlice.reducer;
