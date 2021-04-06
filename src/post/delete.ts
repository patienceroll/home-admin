import { DataProvider } from "react-admin";

import * as PhotoApi from "../page/photo/service";

const Delete: DataProvider["delete"] = (resourse, params) => {
  switch (resourse) {
    case "photo":
      return PhotoApi.DeletePhoto({ id: params.id }).then(() => {
        return {
          data: params.previousData as any,
        };
      });
    default:
      return Promise.reject("未找到删除请求");
  }
};

export default Delete;
