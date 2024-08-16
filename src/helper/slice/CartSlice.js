import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      existingItem
        ? (state.cart = state.cart.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  qty: item.qty + 1,
                }
              : item
          ))
        : state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    incrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id && item.qty > 0
          ? { ...item, qty: item.qty - 1 }
          : item
      );
    },
    drop: (state, action) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty, drop } =
  cartSlice.actions;
export default cartSlice.reducer;