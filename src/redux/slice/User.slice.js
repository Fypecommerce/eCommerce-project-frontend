import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",

  initialState: {
    name: "Guest",
  },

  reducer: {
    update: (state, action) => {
      state.name = action.payload.name;
    },
  },
});

// exporting
export const { update } = user.actions;
export default user.reducer;
