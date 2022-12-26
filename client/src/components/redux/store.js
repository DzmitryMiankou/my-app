import { combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import messegDataReducer from "./messegData-reducer.ts";
//import commitDataReducer from "./commitData-reducer";
import { legacy_createStore as createStore } from "redux";
import registerReducer from "./register-reducer.ts";
import authReducer from "./auth-reducer.ts";
import { rootSaga } from "./sagas/sagas.js";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  messeges: messegDataReducer,
  //commit: commitDataReducer,
  register: registerReducer,
  auth: authReducer,
});

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
export default store;
