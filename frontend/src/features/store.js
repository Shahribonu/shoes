import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./productsApi";
import cartReducer from "./cartSlice";
import { getTotal } from "./cartSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(getTotal());
