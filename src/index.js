import store from "./components/redux/store";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

let a = {
  name: "David",
  age: 23,
  messeges: {
    id: 1,
    date: "Hi, my name is GGK",
  },
};

let clone = Object.assign({}, a);

let b = clone.messeges;
let c = a.messeges;
b.id = 233532;

console.log(c);
