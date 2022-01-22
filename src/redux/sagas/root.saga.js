import { all, fork } from "redux-saga/effects";
import * as Auth from "./auth.saga";

export default function* rootSaga() {
  yield all([...Object.values(Auth)].map(fork));
}
