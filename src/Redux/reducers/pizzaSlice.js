import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    addPizzaToCart: (state, action) => {
      const pizzaWithId = { ...action.payload, id: nanoid() };
      state.cart.push(pizzaWithId);
      console.log(pizzaWithId);
    },
    updatePizzaOptions: (state, action) => {
      const { id, quantity } = action.payload;
      const existingPizza = state.cart.find((pizza) => pizza.id === id);
      if (existingPizza) {
        existingPizza.quantity = quantity;
        existingPizza.finalPrice = (existingPizza.basePrice + existingPizza.sizePrices[existingPizza.size] + existingPizza.crustPrices[existingPizza.crust]) * quantity;
      }
    },
    
    removePizzaFromCart: (state, action) => {
      state.cart = state.cart.filter((pizza) => pizza.id !== action.payload);
    },
  },
});

export const { addPizzaToCart, updatePizzaOptions, removePizzaFromCart } =
  pizzaSlice.actions;

export default pizzaSlice.reducer;
