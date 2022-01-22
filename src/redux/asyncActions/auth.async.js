// import axios from "../../services/axios";
import { trackPromise } from "react-promise-tracker";
// import { getUrl } from "../urls";

export const loginAsync = ({ email, password }) => {
  // return trackPromise(axios.post(getUrl("login"), payload));
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@example.com" && password == "123456") {
        resolve({ name: "testUser" }); // success
      } else {
        reject({ email, password }); // fail
      }
    }, 1000);
  });
  return trackPromise(myPromise);
};
