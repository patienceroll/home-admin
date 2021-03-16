import { DataProvider } from "react-admin";
import HomeApi from "../home/list/service";

const getList: DataProvider["getList"] = (Resource, params) => {
  switch (Resource) {
    case "home":
      return HomeApi.GetHomeList({}).then((res) => {
        return {
          data: res.data.map(({ title, subTitle, _id, url, image }) => ({
            title,
            subTitle,
            url,
            image,
            id: _id,
          })),
          total: 64,
        } as any;
      });

    default:
      throw new Error("请求列表路径错误");
  }
};

export default getList;
