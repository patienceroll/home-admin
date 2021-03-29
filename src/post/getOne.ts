import { DataProvider } from "react-admin";
import HomeApi from "../page/home/service";
import newFile from "../helper/new-file/new-file";

const getOne: DataProvider["getOne"] = (resourse, params) => {
  switch (resourse) {
    case "home":
      return HomeApi.GetHomeItem(params.id).then(async (res) => {
        const { id, image, title, subTitle, url } = res.data;
        const data = {
          id,
          title,
          subTitle,
          url,
          image: await newFile(image),
        };
        return { data } as any;
      });
    default:
      throw new Error("未找到获取详情请求");
  }
};

export default getOne;
