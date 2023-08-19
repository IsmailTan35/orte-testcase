import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { productsReducer as productsRequest } from "./store/products";
import { sizesReducer as sizesRequest } from "./store/sizes";

export { productsActions } from "./store/products";
export { sizesActions } from "./store/sizes";

const reducer = combineReducers({
  productsRequest,
  sizesRequest,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
