import { Get, Post, buildUrl } from "../../fetch/fetch";
import type { BaseResponse, ListType } from "../../fetch/data";

import type Data from "./data";

/** 获取相册列表 */
export const GetPhotoList = (params: Data.PhotoListParams) => {
  return Get<ListType<Data.PhotoListItem>>(buildUrl("photo"), params);
};

/** 新建相册 */
export const PostPhoto = (params: Data.PhotoCreateParams) => {
  return Post<BaseResponse<Data.PhotoListItem & { id: string }>>(
    buildUrl("photo"),
    params
  );
};

/** 编辑相册 */
export const PutPhoto = (params: Data.PhotoCreateParams & { id: string }) => {
  return Post<BaseResponse<Data.PhotoCreateParams & { id: string }>>(
    buildUrl("photo"),
    params
  );
};
