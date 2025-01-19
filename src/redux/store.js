import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productsReducer from "./productSlice";

// Load initial state from localStorage
const preloadedState = {
  user: {
    user: JSON.parse(localStorage.getItem("fesUser")),
    status: "idle",
    error: null,
  },
};

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
  },
  preloadedState,
});

export default store;
