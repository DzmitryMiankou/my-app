import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { addPost } from "./components/redux/state";
import { upDateChange } from "./components/redux/state";
const root = ReactDOM.createRoot(document.getElementById("root"));
export let renderRoot = (props) => {
  root.render(
    <React.StrictMode>
      <App appState={props} toRedux={addPost} upDate={upDateChange} />
    </React.StrictMode>
  );
};
reportWebVitals();
