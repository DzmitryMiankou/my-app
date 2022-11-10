import state, { subscribe } from "./components/redux/state.js";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { addPost, upDateChange } from "./components/redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
let renderRoot = () => {
  root.render(
    <React.StrictMode>
      <App appState={state} toRedux={addPost} upDate={upDateChange} />
    </React.StrictMode>
  );
};

renderRoot(state);
subscribe(renderRoot);
reportWebVitals();
