import { getUsers } from "../../api/usersAPI.ts";
import { call } from "redux-saga/effects";

export function* workerSaga() {
  const data = yield call(getUsers());
  console.log(data);
}

export function* watchClikSaga() {
  yield workerSaga;
}

export function* rootSaga() {
  yield watchClikSaga();
}
