import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "../utils/statusCode";

export const getProducts = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();

  return result;
});

const productsAdapter = createEntityAdapter({
  // Assume IDs are stored in a field other than `product.id`
  selectId: (product) => product.id,
});
const productsSlice = createSlice({
  name: "products",
  initialState: productsAdapter.getInitialState({
    status: StatusCode.IDLE,
  }),
  reducers: {
    setAllSkins: productsAdapter.setAll,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        productsAdapter.setAll(state, action.payload);
        state.status = StatusCode.FULFILLED;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

//Fetch Action
export const { fetchProducts } = productsSlice.actions;

//Reducer
export default productsSlice.reducer;

//Selectors
export const statusSelector = (state) => state.products.status;

export const { selectAll: selectAllProducts } = productsAdapter.getSelectors(
  (state) => state.products
);

//Actions
export const { setAllSkins } = productsSlice.actions;
