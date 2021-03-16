import { DataProvider } from "react-admin";

const getOne: DataProvider["getOne"] = (resourse, params) => {
  console.log(resourse, params);
  return new Promise(() => {
    return {};
  });
};

export default getOne;
