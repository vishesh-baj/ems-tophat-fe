import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/CounterSlice";
import { UserSlice } from "./features/users/UserSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
