import type { AuthProvider } from "react-admin";
import { buildUrl, Post } from "src/fetch/fetch";

export const PostSign = (params: { username: string; password: string }) =>
  Post(buildUrl("sign"), params);

const auth: AuthProvider = {
  login: (params) =>
    Post<{ token: string }>(buildUrl("login"), params).then((res) => {
      localStorage.setItem("token", res.data.token);
      return res;
    }),
  logout: () => {
    localStorage.setItem("token", "");
    return Promise.resolve(false);
  },
  checkAuth: (parms) =>
    Post<{ islogin: boolean }>(buildUrl("islogin"), parms).then((res) => {
      if (res.data.islogin === false) window.location.href = "/#/login";
    }),
  checkError: () => Promise.resolve(),
  getPermissions: () => Promise.resolve(),
};

export default auth;
