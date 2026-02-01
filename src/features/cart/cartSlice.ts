import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.data = action.payload;
    },
    clearCart: (state) => {
      state.data = [];
    },
  },
});

export const { setCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
