import Fetch from "../fetch";

/** 上传图片 */
const UploadImage = (data: FormData) => {
  return Fetch.postFormdata<{
    fileName: string | string[];
    filePath: string | string[];
  }>(Fetch.buildUrl("upload/image"), data);
};

const commomApi = {
  UploadImage,
};

export default commomApi;
