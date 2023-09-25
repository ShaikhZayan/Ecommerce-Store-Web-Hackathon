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
        existingItem.quantity += quantity; // Increment quantity by the specified amount
      } else {
        state.push({
          product: product,
          quantity: quantity, // Set initial quantity to the specified amount
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;

      const existingItem = state.find((item) => item.product.id === productId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; // Decrement quantity by 1
        } else {
          state.splice(state.indexOf(existingItem), 1); // Remove the item if quantity is 1 or less
        }
      }
    },
    clearCart: (state) => {
      state.length = 0; // Clear the cart by setting its length to 0
    },
    updateCartItemQuantity: (state, action: PayloadAction<{ productId: number; quantity: number }>) => {
      const { productId, quantity } = action.payload;
      const itemToUpdate = state.find((item) => item.product.id === productId);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
    addCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.find((item) => item.product.id === action.payload.product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }

      // Recalculate total quantity and total amount
      const totalQuantity = state.reduce((total, item) => total + item.quantity, 0);
      const totalAmount = state.reduce((total, item) => total + item.product.price * item.quantity, 0);

      return { ...state, totalQuantity, totalAmount };
    },
    subtractCart: (state, action: PayloadAction<{ productId: number }>) => {
      const { productId } = action.payload;
      const itemIndex = state.findIndex((item) => item.product.id === productId);
    
      if (itemIndex !== -1) {
        if (state[itemIndex].quantity > 1) {
          state[itemIndex].quantity -= 1; // Modify the draft state
        } else {
          state.splice(itemIndex, 1); // Modify the draft state to remove the item
        }
      }
    },
    
    delItem: (state, action: PayloadAction<{ productId: number }>) => {
      const { productId } = action.payload;
      state = state.filter((item) => item.product.id !== productId);

      // Recalculate total quantity and total amount
      const totalQuantity = state.reduce((total, item) => total + item.quantity, 0);
      const totalAmount = state.reduce((total, item) => total + item.product.price * item.quantity, 0);

      return { ...state, totalQuantity, totalAmount };
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateCartItemQuantity, addCart, subtractCart, delItem } = cartSlice.actions;

export default cartSlice.reducer;
