const BASEURL = {
  baseURL: "http://localhost:8000/",
};

const AUTH = {
  login: "/accounts/api/v1/login/",
  refresh: "/accounts/api/v1/token/refresh/",
};

const allURLs = {
  ...BASEURL,
  ...AUTH,
};

export const getUrl = (key) => {
  return allURLs[key];
};
