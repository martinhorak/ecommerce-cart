import { createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../../types/product';

interface CartProductType extends ProductType {
    quantity: number
}

interface CartState {
    cart: Array<CartProductType>
}

const initialState: CartState = {
    cart: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if ( item ) item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if ( item ) {
        if ( item?.quantity === 1 ) {
          const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
          state.cart = removeItem;
        } else {
          item.quantity--;
        }
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;