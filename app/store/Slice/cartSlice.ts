import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '@/components/type';

export interface CartItem {
  id?: number;
  product: Product;
  quantity: number;
}

const initialState: CartItem[] = [];

const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id, product, quantity } = action.payload;

      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.push({
          id,
          product,
          quantity,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;

      const existingItemIndex = state.findIndex((item) => item.id === productId);

      if (existingItemIndex !== -1) {
        if (state[existingItemIndex].quantity > 1) {
          state[existingItemIndex].quantity -= 1;
        } else {
          state.splice(existingItemIndex, 1);
        }
      }
    },
    clearCart: () => [],
  },
});

export const cartActions = counterSlice.actions;

export default counterSlice.reducer;
