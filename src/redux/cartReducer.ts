import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CartItemType } from '@/types/index';

export interface CartState {
  products: CartItemType[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemType>) => {
      const item = state.products.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity = action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products?.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
    editQuantityCartProduct: (state, action) => {
      if (action.payload.quantity === 0) {
        state.products = state.products.filter(
          (item) => item.id !== action.payload.id
        );
      }

      state.products = state.products.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    },
  },
});

export const { addToCart, removeFromCart, resetCart, editQuantityCartProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
