import { DataProvider } from "react-admin";

const create: DataProvider["create"] = (resourse, params) => {
  console.log(resourse, params);
  return new Promise(() => {
    return {};
  });
};

export default create;
