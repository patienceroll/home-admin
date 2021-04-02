import { DataProvider } from "react-admin";
import { UploadImage } from "../fetch/common/common";

import HomeApi from "../page/home/service";
import * as PhotoApi from "../page/photo/service";

const create: DataProvider["create"] = async (resourse, params) => {
  const { data } = params;
  const formData = new FormData();
  console.log(data);
  switch (resourse) {
    case "home":
      formData.append("file", data.image.rawFile);
      const img = await UploadImage(formData);
      const RsData = await HomeApi.PostHomeItem({
        ...data,
        image: img.data.filePath,
      });
      return {
        data: RsData.data,
        validUntil: new Date(),
      };
    case "photo":
      formData.append("file", data.cover.rawFile);
      const cover = await UploadImage(formData);
      const PhotoCreate = await PhotoApi.PostPhoto({
        ...data,
        cover:cover.data.filePath,
        content: encodeURIComponent(data.content),
      });
      return {
        data: PhotoCreate.data,
        validUntil: new Date(),
      };
    default:
      return Promise.reject("未找到请求的接口");
  }
};

export default create;
