import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const applyCoupon = createAsyncThunk(
  "coupon/apply",
  async (
    payload: { code: string; subtotal: number },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.post("/coupon/apply", payload);
      // 👇 BACKEND response ichidagi data
      return res.data.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Coupon xato"
      );
    }
  }
);

interface CouponType {
  id: number;
  code: string;
  discount_for: number;
  title: string;
}

interface CouponState {
  data: CouponType | null;
  loading: boolean;
  error: string | null;
}

const initialState: CouponState = {
  data: null,
  loading: false,
  error: null,
};

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    clearCoupon: (state) => {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(applyCoupon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(applyCoupon.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(applyCoupon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearCoupon } = couponSlice.actions;
export default couponSlice.reducer;
