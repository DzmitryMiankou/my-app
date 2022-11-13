import store from "./components/redux/store";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
let renderRoot = (state) => {
  root.render(
    <React.StrictMode>
      <App appState={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  );
};

renderRoot(store.getState());
store.subscribe(() => {
  let state = store.getState();
  renderRoot(state);
});
