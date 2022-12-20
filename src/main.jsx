import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <AppContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContextProvider>
    </BrowserRouter>
  </>
);
