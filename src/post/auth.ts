import type { AuthProvider } from "react-admin";
import { buildUrl, Post } from "src/fetch/fetch";

const auth: AuthProvider = {
  login: (params) => Post(buildUrl("login"), params),
  logout: () => {
    localStorage.setItem("token", "");
    return Promise.resolve(false);
  },
  checkAuth: (parms) => Post(buildUrl("islogin"), parms).then(),
  checkError: (params) => Post(buildUrl("error"), params).then(),
  getPermissions: () => Promise.resolve(),
};

export default auth;
