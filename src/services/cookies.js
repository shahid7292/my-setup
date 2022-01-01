import cookie from "react-cookies";

export default () => {
  return {
    elements: {
      ACCESS_TOKEN: "accessToken",
      REFRESH_TOKEN: "refreshToken",
      REMEMBER_ME: "rememberMe",
    },

    options(expires) {
      return { path: "/", expires };
    },

    setAppToken(tokenObj, rememberMe = false) {
      cookie.save(this.elements.ACCESS_TOKEN, tokenObj.access, this.options());
      cookie.save(this.elements.REMEMBER_ME, rememberMe, this.options());
      if (tokenObj.refresh && rememberMe === true) {
        const expires = new Date();
        expires.setDate(Date.now() + 1000 * 60 * 60 * 6);
        cookie.save(
          this.elements.REFRESH_TOKEN,
          tokenObj.refresh,
          this.options(expires)
        );
      }
    },

    getAccessToken() {
      return cookie.load(this.elements.ACCESS_TOKEN, this.options());
    },

    getRememberMe() {
      return cookie.load(this.elements.REMEMBER_ME, this.options());
    },

    getRefreshToken() {
      if (this.getRememberMe() === "true") {
        return cookie.load(this.elements.REFRESH_TOKEN, this.options());
      }
      return null;
    },

    clearToken() {
      cookie.remove(this.elements.ACCESS_TOKEN, this.options());
      cookie.remove(this.elements.REFRESH_TOKEN, this.options());
      cookie.remove(this.elements.REMEMBER_ME, this.options());
    },

    isTokenAvailable() {
      if (this.getRememberMe() === "true") {
        return (
          this.getAccessToken() !== undefined ||
          this.getRefreshToken() !== undefined
        );
      }
      return this.getAccessToken() !== undefined;
    },
  };
};
