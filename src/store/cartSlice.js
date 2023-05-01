import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  deliveryFee: 15,
  freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.product;
      const cartItem = state.items.find(
        (item) => item.product.id === newProduct.id
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.items = [...state.items, { product: newProduct, quantity: 1 }];
      }
    },
    increaseQuantity: (state, action) => {
      const cartItem = state.items.find(
        (item) => item.product.id === action.payload
      );
      if (cartItem) {
        cartItem.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const cartItem = state.items.find(
        (item) => item.product.id === action.payload
      );
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item !== cartItem);
      }
    },
  },
});
export const totalCartItems = (state) => state.cart.items.length;

export const selectSubTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

export const cartSelector = (state) => state.cart;
export const selectDeliveryPrice = createSelector(
  cartSelector,
  selectSubTotal,
  (cart, subTotal) => (subTotal > cart.freeDeliveryFrom ? 0 : cart.deliveryFee)
);

export const selectTotal = createSelector(
  selectSubTotal,
  selectDeliveryPrice,
  (subTotal, delivery) => subTotal + delivery
);
