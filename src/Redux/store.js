import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./reducers/pizzaSlice";

const store = configureStore({
    reducer:{
        pizza : pizzaReducer,
    }
});

export default store;