import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import couponReducer from "../features/coupon/couponSlice";
import orderReducer from "../features/order/orderSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    coupon: couponReducer,   // 👈 SHU BO‘LISHI SHART
    order: orderReducer,
  },
});
