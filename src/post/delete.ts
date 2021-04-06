import { DataProvider } from "react-admin";

import * as HomeApi from "../page/home/service";
import * as PhotoApi from "../page/photo/service";

const Delete: DataProvider["delete"] = (resourse, params) => {
  switch (resourse) {
    case "home":
      return HomeApi.DeleteHomeItem({ id: params.id }).then(() => ({
        data: params.previousData as any,
      }));

    case "photo":
      return PhotoApi.DeletePhoto({ id: params.id }).then(() => ({
        data: params.previousData as any,
      }));
    default:
      return Promise.reject("未找到删除请求");
  }
};

export default Delete;
