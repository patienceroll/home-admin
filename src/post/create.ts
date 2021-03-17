import { DataProvider } from "react-admin";
import commomApi from "../fetch/common/common";

import HomeApi from "../home/service";

const create: DataProvider['create'] = async (resourse, params) => {
  console.log(resourse);
  switch (resourse) {
    case "home":
      console.log('1');
      const { data } = params;
      const formData = new FormData();
      formData.append("file", data.image.rawFile);
      const shortUrl = await commomApi.UploadImage(formData);
      await HomeApi.PostHomeItem({
        ...data,
        image: (shortUrl as unknown) as string,
      });
      return {} as any;
    default:
      return Promise.reject("未找到请求的接口");
  }
};

export default create;
