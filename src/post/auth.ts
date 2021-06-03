import type { AuthProvider } from "react-admin";
import { buildUrl, Post } from "src/fetch/fetch";

export const PostSign = (params: { username: string; password: string }) =>
  Post(buildUrl("sign"), params);

const auth: AuthProvider = {
  login: (params) => Post(buildUrl("login"), params),
  logout: () => {
    localStorage.setItem("token", "");
    return Promise.resolve(false);
  },
  checkAuth: (parms) => Post(buildUrl("islogin"), parms).then(),
  checkError: () => Promise.resolve(),
  getPermissions: () => Promise.resolve(),
};

export default auth;
