import { DataProvider } from "react-admin";

const update: DataProvider["update"] = (resourse, params) => {
  console.log(resourse, params);
  return new Promise(() => {
    return {};
  });
};

export default update;
