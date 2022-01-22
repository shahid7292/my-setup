import * as actions from "../action.constants";

const initialState = {
  profile: {},
};

const storeProfile = (state, action) => {
  return {
    ...state,
    profile: action.payload,
  };
};

const handlers = {
  [actions.STORE_PROFILE]: storeProfile,
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
