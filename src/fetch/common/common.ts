import Fetch from "../fetch";

/** 上传图片 */
const UploadImage = (data: FormData) => {
  return Fetch.postFormdata<string | string[]>(
    Fetch.buildUrl("upload/image"),
    data
  );
};

const commomApi = {
  UploadImage,
};

export default commomApi;
