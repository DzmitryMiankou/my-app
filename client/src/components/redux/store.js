import { combineReducers, applyMiddleware, compose } from "redux";
import messegDataReducer from "./messegData-reducer.ts";
//import commitDataReducer from "./commitData-reducer";
import { legacy_createStore as createStore } from "redux";
import registerReducer from "./register-reducer.ts";
import authReducer from "./auth-reducer.ts";
import getDialogListUsersReducer from "./dialog-reducer.ts";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const rootReducers = combineReducers({
  messeges: messegDataReducer,
  //commit: commitDataReducer,
  register: registerReducer,
  auth: authReducer,
  dialogListAPI: getDialogListUsersReducer,
});

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
