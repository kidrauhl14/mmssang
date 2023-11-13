// 장바구니 데이터를 관리하는 Redux slice를 정의하는 파일
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const {addItem} = cartSlice.actions;
export default cartSlice.reducer;