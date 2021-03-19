import { DataProvider } from "react-admin";

import HomeApi from "../home/service";

/** 获取table列表 */
const getList: DataProvider["getList"] = async (Resource, params) => {
  console.log(params);
  const { filter, sort, pagination } = params;
  switch (Resource) {
    case "home":
      const res = await HomeApi.GetHomeList({});
      return {
        data: res.data as any,
        total: 64,
      };

    default:
      throw new Error("请求列表路径错误");
  }
};

export default getList;
