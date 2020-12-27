import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/font-awesome.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
axios.interceptors.request.use(
  (req) => {
    return req;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
