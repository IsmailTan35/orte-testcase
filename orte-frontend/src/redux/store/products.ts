import { createSlice } from "@reduxjs/toolkit";
import IProduct from "../interface/products";

const { reducer, actions } = createSlice({
  name: "productsActions",
  initialState: { items: [] } as { items: IProduct[] | [] },
  reducers: {
    update: (state, action: { payload: IProduct[] | [] }) => {
      state.items = action.payload;
    },
    delete: state => {
      state.items = [];
    },
  },
});

export { actions as productsActions };
export { reducer as productsReducer };
