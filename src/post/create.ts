import { DataProvider } from "react-admin";
import { UploadImage } from "../fetch/common/common";

import * as HomeApi from "../page/project/service";
import * as PhotoApi from "../page/notes/service";

const create: DataProvider["create"] = async (resourse, params) => {
  const { data } = params;
  const formData = new FormData();
  switch (resourse) {
    case "project":
      formData.append("file", data.image.rawFile);
      const img = await UploadImage(formData);
      const RsData = await HomeApi.PostHomeItem({
        ...data,
        image: img.data.filePath,
      });
      return {
        data: RsData.data as any,
        validUntil: new Date(),
      };
    case "notes":
      formData.append("file", data.cover.rawFile);
      const cover = await UploadImage(formData);
      const PhotoCreate = await PhotoApi.PostPhoto({
        ...data,
        cover: cover.data.filePath,
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
