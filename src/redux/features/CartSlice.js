import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  total: 0,
};
export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (itemInCart) {
        itemInCart.quantity_p++;
      } else {
        state.cart.push({
          ...action.payload,
          quantity_p:
            action.payload.quantity_p !== undefined
              ? action.payload.quantity_p
              : 1,
        });
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload);
      item.quantity_p++;
    },

    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload);
      if (item.quantity_p === 1) {
        item.quantity_p = 1;
      } else {
        item.quantity_p--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item._id !== action.payload
      );
      state.cart = removeItem;
    },
    totalCart: (state, action) => {
      state.cart.map((item) => {
        state.total = item.quantity_p * item.price;
      });
    },
  },
});
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  CartSlice.actions;
export default CartSlice.reducer;
