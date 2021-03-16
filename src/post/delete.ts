import { DataProvider } from "react-admin";

const Delete: DataProvider["delete"] = (resourse, params) => {
  console.log(resourse, params);
  return new Promise(() => {
    return {};
  });
};

export default Delete;
