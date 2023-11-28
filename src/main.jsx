// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import { AuthProvider } from "./AuthContext.jsx";

// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import store, { persistor } from "./features/store.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <PersistGate loading={<div>로딩중...</div>} persistor={persistor}>
//       <AuthProvider>
//         <App />
//       </AuthProvider>
//     </PersistGate>
//   </Provider>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
