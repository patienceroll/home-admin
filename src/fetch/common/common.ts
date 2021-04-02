import { PostFormdata, buildUrl } from "../fetch";

/** 上传图片 */
export const UploadImage = (data: FormData) => {
  return PostFormdata<{
    fileName: string | string[];
    filePath: string | string[];
  }>(buildUrl("upload/image"), data);
};




