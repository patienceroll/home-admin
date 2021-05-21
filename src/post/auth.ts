import type { AuthProvider } from "react-admin";
import { buildUrl, Post } from "src/fetch/fetch";

const auth: AuthProvider = {
  login: (params) => Post(buildUrl("login"), params),
  logout: (params) => Post(buildUrl("logout"), params).then((res) => {}),
  checkAuth: (parms) => Post(buildUrl("islogin"), parms).then(),
  checkError: (params) => Post(buildUrl("error"), params).then(),
  getPermissions: (params) =>
    Post(buildUrl("permissions"), params).catch(() => Promise.resolve()),
};

export default auth;
