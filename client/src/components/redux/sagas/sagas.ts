export function* workerSaga() {
  console.log("rootSaga");
  yield;
}

export function* watchClikSaga() {
  console.log("rootSaga");
  yield;
}

export function* rootSaga() {
  yield watchClikSaga()
}
