import * as actions from "../action.constants";

export const requestLogin = (data, successCallback, errorCallback) => ({
  type: actions.REQUEST_LOGIN,
  payload: data,
  successCallback,
  errorCallback,
});

export const StoreProfile = (data) => ({
  type: actions.STORE_PROFILE,
  payload: data,
});
