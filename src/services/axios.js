import axios from "axios";
import { toast } from "react-toastify";
import CookieService from "./cookies.js";
import { getUrl } from "../redux/urls";
import { isEmpty } from "lodash";

const defaultHeaders = {
  "Content-type": "application/json",
};

const requestProcess = axios.create({
  baseURL: getUrl("baseURL"),
  headers: defaultHeaders,
});
export default requestProcess;

const refreshProcess = axios.create({
  baseURL: getUrl("baseURL"),
  headers: defaultHeaders,
});

requestProcess.interceptors.request.use((req) => {
  const access = CookieService().getAccessToken();
  if (access) {
    req.headers.Authorization = `Bearer ${access}`;
  }
  return req;
});

requestProcess.interceptors.response.use(
  async (response) => {
    if (response.status === 204) {
      toast.success("Record Deleted Successfully");
    } else {
      // Toaster display on user actions only. Like Add, Edit, Delete
      if (!isEmpty(response.data.message) && response.config.method !== "get") {
        toast.success(response.data.message);
      }
    }
    return response;
  },
  (error) => {
    if (error.response.status === 400) {
      const error_message = error.response.data.data;
      if (!isEmpty(error_message)) {
        for (const prop in error_message) {
          toast.error(`${error_message[prop]}`);
        }
      } else {
        toast.error(error.response.data.message);
      }
    } else if (error.response.status === 401) {
      try {
        const refreshToken = CookieService().getRefreshToken();
        if (refreshToken) {
          return refreshProcess
            .post(getUrl("refresh"), { refresh: refreshToken })
            .then(({ data }) => {
              CookieService().setAppToken(data);
              return requestProcess.request(error.config).then((data) => {
                return data;
              });
            })
            .catch(() => {
              CookieService().clearToken();
            });
        } else {
          toast.error(error.response.data.message);
          CookieService().clearToken();
        }
      } catch (error) {
        toast.error(error.response.data.message);
        CookieService().clearToken();
      }
    } else {
      // Capture permission error using detail
      toast.error(error.response.data.message || error.response.data.detail);
    }

    return Promise.reject(error);
  }
);
