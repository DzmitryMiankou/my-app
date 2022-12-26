import { combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import messegDataReducer from "./messegData-reducer.ts";
//import commitDataReducer from "./commitData-reducer";
import { legacy_createStore as createStore } from "redux";
import registerReducer from "./register-reducer.ts";
import authReducer from "./auth-reducer.ts";
import { rootSaga } from "./sagas/sagas.ts";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  messeges: messegDataReducer,
  //commit: commitDataReducer,
  register: registerReducer,
  auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
