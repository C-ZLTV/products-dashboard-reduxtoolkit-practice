import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
      //state è automaticamente settator da Redux Toolkit quindi al dispatch basta passare l'action

      //allo stesso modo il type dell'action viene automaticamente settata da Redux Toolkit e il paramentro passato nel dispatch viene messo al posto del payload
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

//Actions
export const { add, remove } = cartSlice.actions;

//Reducer
export default cartSlice.reducer;

//Selector

export const cart = (state) => state.cart;
//add prende state e action e state update in base al payload passato ad action
