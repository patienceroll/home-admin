import * as React from "react";
import { useLogin, defaultTheme } from "react-admin";
import type { LoginComponent } from "react-admin";
import { TextField, Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import Style from "./index.module.scss";

const MyLoginPage: LoginComponent = ({ theme }) => {
  const login = useLogin();
  const [usernameText, setUsernameText] = React.useState<string>();
  const [passwordText, setPasswordText] = React.useState<string>();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const { password, username } = e.target as any;
    if (!username.value.trim()) setUsernameText("请输入账号");
    else if (!password.value.trim()) setPasswordText("请输入密码");
    else {
      setUsernameText(undefined);
      setPasswordText(undefined);
      login({ password: password.value, username: username.value }).then(
        (res) => {
          localStorage.setItem("token", res.data.token);
        }
      );
    }
  };

  const onChangeUsername: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.value.trim()) setUsernameText("请输入账号");
    else setUsernameText(undefined);
  };
  const onChangePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.value.trim()) setPasswordText("请输入密码");
    else setPasswordText(undefined);
  };

  return (
    <ThemeProvider theme={createMuiTheme(defaultTheme)}>
      <div
        className={Style.ct}
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/bg.jpg)` }}
      >
        <div className={Style.login}>
          <form onSubmit={onSubmit} action="">
            <TextField
              error={Boolean(usernameText)}
              onChange={onChangeUsername}
              className={Style.field}
              label="账号"
              name="username"
              variant="outlined"
              helperText={usernameText}
            />
            <br />
            <TextField
              error={Boolean(passwordText)}
              className={Style.field}
              onChange={onChangePassword}
              label="密码"
              name="password"
              type="password"
              variant="outlined"
              helperText={passwordText}
            />
            <br />
            <Button
              type="submit"
              className={Style.btn}
              variant="contained"
              color="primary"
            >
              登录
            </Button>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default React.memo(MyLoginPage);
