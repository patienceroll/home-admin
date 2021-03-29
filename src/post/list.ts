import { DataProvider } from "react-admin";

import HomeApi from "../page/home/service";

/** 获取table列表 */
const getList: DataProvider["getList"] = async (Resource, params) => {
  console.log(params);
  const { filter, sort, pagination } = params;
  switch (Resource) {
    case "home":
      const {
        data: { list, total },
      } = await HomeApi.GetHomeList({
        ...pagination,
      });
      return {
        data: list as any,
        total: total,
      };

    default:
      throw new Error("请求列表路径错误");
  }
};

export default getList;
