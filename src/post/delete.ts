import { DataProvider } from "react-admin";

import * as HomeApi from "../page/project/service";
import * as PhotoApi from "../page/notes/service";

const Delete: DataProvider["delete"] = (resourse, params) => {
  switch (resourse) {
    case "project":
      return HomeApi.DeleteHomeItem({ id: params.id }).then(() => ({
        data: params.previousData as any,
      }));

    case "notes":
      return PhotoApi.DeletePhoto({ id: params.id }).then(() => ({
        data: params.previousData as any,
      }));
    default:
      return Promise.reject("未找到删除请求");
  }
};

export default Delete;
