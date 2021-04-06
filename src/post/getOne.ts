import { DataProvider } from "react-admin";

import * as HomeApi from "../page/home/service";
import * as PhotoApi from "../page/photo/service";

import newFile from "../helper/new-file/new-file";

const getOne: DataProvider["getOne"] = (resourse, params) => {
  switch (resourse) {
    case "home":
      return HomeApi.GetHomeItem(params.id).then(async (res) => {
        const { id, image, title, subTitle, url } = res.data;
        const dataHome = {
          id,
          title,
          subTitle,
          url,
          image: await newFile(image),
        };
        return { data: dataHome } as any;
      });
    case "photo":
      return PhotoApi.GetPhoto({ id: params.id }).then(async (res) => {
        const { id, content, cover, describe, date, title } = res.data;
        const dataPhoto = {
          id,
          date,
          title,
          describe,
          cover: await newFile(cover),
          content: decodeURIComponent(content),
        };
        return {
          data: dataPhoto,
        };
      });
    default:
      return Promise.reject("未找到获取详情请求");
  }
};

export default getOne;
