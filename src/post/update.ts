import { DataProvider } from "react-admin";
import commomApi from "../fetch/common/common";

import HomeApi from "../home/service";

const update: DataProvider["update"] = async (resourse, params) => {
  switch (resourse) {
    case "home":
      const { data } = params;
      const formData = new FormData();
      console.log(data);
      formData.append("file", data.image);
      const shortUrl = await commomApi.UploadImage(formData);
      const res = await HomeApi.PutHomeItem({
        ...data,
        image: (shortUrl as unknown) as string,
      });
      return { data: res.data };
    default:
      return Promise.reject("未找到请求的接口");
  }
};

export default update;
