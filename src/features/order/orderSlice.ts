import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const placeOrder = createAsyncThunk(
  "order/place",
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await axios.post("/order/create", payload);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Order xato"
      );
    }
  }
);

interface OrderState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: OrderState = {
  loading: false,
  error: null,
  success: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetOrder: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(placeOrder.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetOrder } = orderSlice.actions;
export default orderSlice.reducer;
