import { createSlice, type PayloadAction, } from "@reduxjs/toolkit";
import type { ProductType } from "../@types"; // sening ProductType joyiga mosla

interface ProductPreviewState {
  open: boolean;
  product: ProductType | null;
}

const initialState: ProductPreviewState = {
  open: false,
  product: null,
};

const productPreviewSlice = createSlice({
  name: "productPreview",
  initialState,
  reducers: {
    openPreview(state, action: PayloadAction<ProductType>) {
      state.open = true;
      state.product = action.payload;
    },
    closePreview(state) {
      state.open = false;
      state.product = null;
    },
  },
});

export const { openPreview, closePreview } = productPreviewSlice.actions;
export default productPreviewSlice.reducer;
