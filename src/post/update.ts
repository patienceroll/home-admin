import { DataProvider } from "react-admin";
import { UploadImage } from "../fetch/common/common";

import HomeApi from "../page/home/service";
import * as PhotoApi from "../page/photo/service";

const update: DataProvider["update"] = async (resourse, params) => {
  const { data, id } = params;
  const formData = new FormData();
  switch (resourse) {
    case "home":
      // 如果更换过图片,数据格式如此
      if (data.image.rawFile) {
        formData.append("file", data.image.rawFile);
      } else {
        formData.append("file", data.image);
      }
      const imgHomeRes = await UploadImage(formData);
      const resHome = await HomeApi.PutHomeItem({
        ...data,
        id,
        image: (imgHomeRes.data.filePath as unknown) as string,
      });
      return { data: resHome.data };
    case "photo":
      // 如果更换过图片,数据格式如此
      if (data.cover.rawFile) {
        formData.append("file", data.cover.rawFile);
      } else {
        formData.append("file", data.cover);
      }
      const imgPhotoRes = await UploadImage(formData);

      const resPhoto = await PhotoApi.PutPhoto({
        ...data,
        cover: imgPhotoRes.data.filePath,
        content: encodeURIComponent(data.content),
      });
      return { data: resPhoto.data };
    default:
      return Promise.reject("未找到请求的接口");
  }
};

export default update;
