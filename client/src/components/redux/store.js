import { combineReducers } from "redux";
import messegDataReducer from "./messegData-reducer.ts";
//import commitDataReducer from "./commitData-reducer";
import { legacy_createStore as createStore } from "redux";
import registerReducer from "./register-reducer.ts";
import authReducer from "./auth-reducer.ts";

let reducers = combineReducers({
  messeges: messegDataReducer,
  //commit: commitDataReducer,
  register: registerReducer,
  auth: authReducer,
});

let store = createStore(reducers);

export default store;
