import { DataProvider } from "react-admin";
import HomeApi from "../home/service";

const getOne: DataProvider["getOne"] = (resourse, params) => {
  switch (resourse) {
    case "home":
      return HomeApi.GetHomeItem(params.id).then((res) => {
        return { data: res.data as any };
      });
    default:
      throw new Error("未找到获取详情请求");
  }
};

export default getOne;
