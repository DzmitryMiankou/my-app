import { take } from "rxjs";
import { getUsers } from "../../api/usersAPI.ts";

export function* workerSaga() {
  const data = yield getUsers();
  console.log(data);
}

export function* watchClikSaga() {
  yield workerSaga;
}

export function* rootSaga() {
  yield watchClikSaga();
}
