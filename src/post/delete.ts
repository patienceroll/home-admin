import { DataProvider } from "react-admin";

import * as PhotoApi from "../page/photo/service";

const Delete: DataProvider["delete"] = (resourse, params) => {
  console.log(params);
  switch (resourse) {
    case "photo":
      return PhotoApi.DeletePhoto({ id: params.id }).then(()=>{
        return params.previousData as any
      });
    default:
      throw new Error("未找到删除请求");
  }
};

export default Delete;
