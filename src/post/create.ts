import { DataProvider } from "react-admin";
import commomApi from "../fetch/common/common";

import HomeApi from "../home/service";

const create: DataProvider["create"] = async (resourse, params) => {
  const { data } = params;

  switch (resourse) {
    case "home":
      const formData = new FormData();
      formData.append("file", data.image.rawFile);
      const img = await commomApi.UploadImage(formData);
      const RsData = await HomeApi.PostHomeItem({
        ...data,
        image: img.data.filePath,
      });
      return {
        data: RsData.data,
        validUntil: new Date(),
      };
    default:
      return Promise.reject("未找到请求的接口");
  }
};

export default create;
