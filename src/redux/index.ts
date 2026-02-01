import {configureStore} from "@reduxjs/toolkit";
import modalSlice from "./modal-store";
import  userSlice  from "./user-slice";
import shopSlice from "./shop-slice";
import productPreviewReducer from "./productPreviewSlice";

export const store = configureStore({
    reducer : {
        modalSlice,
        userSlice,
        shopSlice,
        productPreview: productPreviewReducer,
        
    },
})

export type RootStore = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;