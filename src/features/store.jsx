//Redux는 애플리케이션의 모든 상태 정보를 하나의 중앙 집중화된 객체(store) 내에 저장합니다. 

// 모든 slice를 합쳐서 store를 생성하는 파일.
//Redux 스토어를 생성합니다. configureStore 함수는 리듀서를 인자로 받아 스토어를 생성합니다. 
//여기서 리듀서(reducer)는 상태를 변경하는 함수

import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import productReducer from '../features/products/productSlice';
import cartReducer from '../features/cart/cartSlice';

const persistConfig = {
    key: 'root',
    // localStorage에 저장
    storage,
    // products리듀서, auth리듀서를 localStorage에 저장장
    whitelist: ['products', 'cart'],  // (products와 cart 상태를 저장)
};

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
export const persistor = persistStore(store);
