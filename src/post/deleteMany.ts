import { DataProvider } from "react-admin";

const deleteMany: DataProvider["deleteMany"] = (resourse, params) => {
  console.log(resourse, params);
  return new Promise(() => {
    return {};
  });
};

export default deleteMany;
