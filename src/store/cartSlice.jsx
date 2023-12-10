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
    delete() {},
  },
});

//Actions
export const { add } = cartSlice.actions;

//Reducer
export default cartSlice.reducer;

//add prende state e action e state update in base al payload passato ad action
