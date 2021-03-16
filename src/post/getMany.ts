import { DataProvider } from "react-admin";

const getMany: DataProvider["getMany"] = (resourse, params) => {
  console.log(resourse, params);
  return new Promise(() => {
    return {};
  });
};

export default getMany;
