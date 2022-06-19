// importing createSlice from redux
import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",

  initialState: [],

  reducers: {
    add: (state, action) => {
      state.push(action.payload.product);
    },
    remove: (state, action) => {
      return state.filter((product) => product.name !== action.payload.name);
    },
    incrementQuantity: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i].name === action.payload.name) {
          state[i].q += 1;
          break;
        }
      }
    },
  },
});

// exporting
export const { add, remove, incrementQuantity } = cart.actions;
export default cart.reducer;
