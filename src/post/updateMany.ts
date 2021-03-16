import { DataProvider } from "react-admin";

const updateMany: DataProvider["updateMany"] = (resourse, params) => {
  console.log(resourse, params);
  return new Promise(() => {
    return {};
  });
};

export default updateMany;
