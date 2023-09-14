import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '@/components/type';

export interface CartItem {
  quantity: number;
  product: Product;
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { quantity, product } = action.payload;

      const existingItem = state.find((item) => item.product.id === action.payload.product.id);

      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity by 1
      } else {
        state.push({
          product: product,
          quantity: 1, // Set initial quantity to 1
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;

      const existingItemIndex = state.findIndex((item) => item.product.id === productId);

      if (existingItemIndex !== -1) {
        if (state[existingItemIndex].quantity > 1) {
          state[existingItemIndex].quantity -= 1; // Decrement quantity by 1
        } else {
          state.splice(existingItemIndex, 1); // Remove the item if quantity is 1 or less
        }
      }
    },
    clearCart: () => [], // Clear the cart by returning an empty array
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
