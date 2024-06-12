import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Contact from "./components/Contact/Contact.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />}></Route>
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
