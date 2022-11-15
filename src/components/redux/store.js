import { combineReducers } from "redux";
import messegDataReducer from "./messegData-reducer";
import commitDataReducer from "./commitData-reducer";
import { legacy_createStore as createStore } from "redux";

let reducers = combineReducers({
  messeges: messegDataReducer,
  commit: commitDataReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
