import { createSelector } from "reselect";

const auth = (state) => state.auth;

export const getProfileData = createSelector(auth, (data) => data.profile);
