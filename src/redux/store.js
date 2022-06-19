// importing redux
import { configureStore } from "@reduxjs/toolkit";

// importing reducers
import userReducer from "./slice/User.slice";
import cartReducer from "./slice/Cart.slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
