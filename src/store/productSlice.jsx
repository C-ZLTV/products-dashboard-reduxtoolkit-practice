import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload;
    // },
  },
  extraReducers: (builder) => {},
});

export const { fetchProducts } = productsSlice.actions;

export default productsSlice.reducer;

export const products = (state) => state.products;

export function getProducts() {
  return async function getProductsThunk(dispatch, getState) {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();
    dispatch(fetchProducts(result));
  };
}
