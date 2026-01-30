import {createSlice} from "@reduxjs/toolkit";
import type {ShopCartType } from "../@types";




interface initialStateType{
    data: ShopCartType[];
}

const initialState: initialStateType = {
    data: JSON.parse(localStorage.getItem("shop") as string) || [],
}
const shopSlice = createSlice({
    name: "shop-slice",
    initialState,
    reducers:{

getData(state, { payload }) {
      const existing = state.data.find((item) => item._id === payload._id);
      if (existing) {
        state.data = state.data.map((item) => {
          if (item._id === payload._id) {
            const newCounter = item.counter + 1;
            return {
              ...item,
              counter: newCounter,
              userPrice: item.price * newCounter,
            };
          }
          return item;
        });

        localStorage.setItem("shop", JSON.stringify(state.data));

        return;
      }

      state.data = [...state.data, { ...payload, counter: 1, userPrice: payload.price }];
      localStorage.setItem("shop", JSON.stringify(state.data));
    },

    deleteData(state, { payload }) {
      state.data = state.data.filter((item) => item._id !== payload);
      localStorage.setItem("shop", JSON.stringify(state.data));
    },

    increment(state, { payload }) {
      state.data = state.data.map((item) => {
        if (item._id === payload) {
          return {
            ...item,
            counter: item.counter +=1,
            userPrice: item.price * item.counter,
          };
        }
        return item;
      });
      localStorage.setItem("shop", JSON.stringify(state.data));
    },

    decrement(state, { payload }) {
      state.data = state.data.map((item) => {
        if (item._id === payload) {
          return {
            ...item,
            counter: item.counter === 1 ? 1 : item.counter -= 1,
            userPrice: item.price * item.counter,
          };
        }
        return item;
      });
      localStorage.setItem("shop", JSON.stringify(state.data));
    }
}
})

export const { getData, deleteData, increment, decrement } = shopSlice.actions;
export default shopSlice.reducer;