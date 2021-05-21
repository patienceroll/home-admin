import { DataProvider } from "react-admin";

import * as HomeApi from "../page/project/service";
import * as PhotoApi from "../page/notes/service";

/** 获取table列表 */
const getList: DataProvider["getList"] = async (Resource, params) => {
  const { filter, sort, pagination } = params;
  switch (Resource) {
    case "project":
      const HomeRes = await HomeApi.GetHomeList({
        ...pagination,
      });
      return {
        data: HomeRes.data.list as any,
        total: HomeRes.data.total,
      };

    case "notes":
      const PhotoRes = await PhotoApi.GetPhotoList({
        ...pagination,
      });
      return {
        data: PhotoRes.data.list as any,
        total: PhotoRes.data.total,
      };

    default:
      return Promise.reject("请求列表路径错误");
  }
};

export default getList;
