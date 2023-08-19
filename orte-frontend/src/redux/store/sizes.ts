import { createSlice } from "@reduxjs/toolkit";
import ISize from "../interface/size";

const { reducer, actions } = createSlice({
  name: "sizesActions",
  initialState: { items: [] } as {
    items: ISize[] | [];
  },
  reducers: {
    update: (state, action) => {
      state.items = action.payload;
    },
    delete: state => {
      state.items = [];
    },
  },
});

export { actions as sizesActions };
export { reducer as sizesReducer };
