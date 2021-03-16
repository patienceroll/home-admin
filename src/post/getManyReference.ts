import { DataProvider } from "react-admin";

const getManyReference: DataProvider["getManyReference"] = (
  resourse,
  params
) => {
  console.log(resourse, params);
  return new Promise(() => {
    return {};
  });
};

export default getManyReference;
