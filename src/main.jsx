// index.jsx
// app.jsx와 index.html을 이어준다.
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {BrowserRouter as Router} from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";

//redux 관련 import
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import store, {persistor} from "./features/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={<div>로딩중...</div>} persistor={persistor}>
      <AuthContextProvider>
        <Router>
          <App />
        </Router>
      </AuthContextProvider>
    </PersistGate>
  </Provider>
);
