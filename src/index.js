import store from "./components/redux/state.js";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
let renderRoot = (state) => {
  root.render(
    <React.StrictMode>
      <App
        appState={state}
        toRedux={store.addPost.bind(store)}
        upDate={store.upDateChange.bind(store)}
      />
    </React.StrictMode>
  );
};

renderRoot(store.getState());
store.subscribe(renderRoot);
reportWebVitals();
