import { call, takeLatest, put } from "redux-saga/effects";
import { loginAsync } from "../asyncActions/auth.async";
import { StoreProfile } from "../actions/auth.actions";
import * as actions from "../action.constants";

function* loginRequest(action) {
  try {
    const response = yield call(loginAsync, action.payload);
    if (response) {
      yield put(StoreProfile(response));
      yield action.successCallback(response.data);
    }
  } catch (e) {
    action.errorCallback(e);
  }
}

export function* authSaga() {
  yield takeLatest(actions.REQUEST_LOGIN, loginRequest);
}
