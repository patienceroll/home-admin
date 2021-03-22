import { DataProvider } from "react-admin";
import commomApi from "../fetch/common/common";

import HomeApi from "../home/service";

const update: DataProvider["update"] = async (resourse, params) => {
  console.log("update", params);
  switch (resourse) {
    case "home":
      const { data, id } = params;
      const formData = new FormData();
      // 如果更换过图片,数据格式如此
      if (data.image.rawFile) {
        formData.append("file", data.image.rawFile);
      } else {
        formData.append("file", data.image);
      }
      const {
        data: { filePath },
      } = await commomApi.UploadImage(formData);
      const res = await HomeApi.PutHomeItem({
        ...data,
        id,
        image: (filePath as unknown) as string,
      });
      return { data: res.data };
    default:
      return Promise.reject("未找到请求的接口");
  }
};

export default update;
