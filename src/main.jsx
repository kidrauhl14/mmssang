// index.jsx
// app.jsx와 index.html을 이어준다.
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {BrowserRouter as Router} from "react-router-dom";
import firebase from "./firebaseApp.js";

console.log(firebase);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
