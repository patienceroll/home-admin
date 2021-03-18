import { DataProvider } from "react-admin";
import commomApi from "../fetch/common/common";

import HomeApi from "../home/service";

const create: DataProvider["create"] = async (resourse, params) => {
  switch (resourse) {
    case "home":
      const { data } = params;
      const formData = new FormData();
      formData.append("file", data.image.rawFile);
      const img = await commomApi.UploadImage(formData);
      await HomeApi.PostHomeItem({
        ...data,
        image: img.data,
      });
      return { data, validUntil: new Date() };
    default:
      return Promise.reject("未找到请求的接口");
  }
};

export default create;
