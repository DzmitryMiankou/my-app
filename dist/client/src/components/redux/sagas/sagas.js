"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootSaga = exports.watchClikSaga = exports.workerSaga = void 0;
function* workerSaga() {
    console.log("rootSaga");
    yield;
}
exports.workerSaga = workerSaga;
function* watchClikSaga() {
    console.log("rootSaga");
    yield;
}
exports.watchClikSaga = watchClikSaga;
function* rootSaga() {
    yield watchClikSaga();
}
exports.rootSaga = rootSaga;
