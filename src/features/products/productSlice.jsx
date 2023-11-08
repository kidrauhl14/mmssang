// 상품 데이터를 관리하는 Redux slice를 정의하는 파일

//이 파일은 상품 데이터에 대한 상태 관리 로직을 포함하고 있습니다. 
// createSlice 함수를 사용하여, 상품 데이터에 대한 액션 생성 함수와 리듀서를 한 번에 생성합니다. 
//액션(action)은 상태를 어떻게 변경할지 나타내는 객체로, type 필드를 필수로 가지고 있습니다.
import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchProductsByCategory, fetchProductById } from "../../api/productAPI";

const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setAllProducts: (state, action) => {
            return action.payload;
        },
        setCategoryProducts: (state, action) => {
            return action.payload;
        },
        setProductDetail: (state, action) => {
            return action.payload;
        },
    },
});

export const {setAllProducts, setCategoryProducts, setProductDetail} =productSlice.actions;
export default productSlice.reducer;