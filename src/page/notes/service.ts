import { Get, Post, buildUrl, Delete, Put } from "../../fetch/fetch";
import type { ListType } from "../../fetch/data";

import type Data from "./data";

/** 获取相册列表 */
export const GetPhotoList = (params: Data.PhotoListParams) => {
  return Get<ListType<Data.PhotoListItem>>(buildUrl("notes"), params);
};

/** 新建相册 */
export const PostPhoto = (params: Data.PhotoCreateParams) => {
  return Post<Data.PhotoListItem & { id: string }>(buildUrl("notes"), params);
};

/** 编辑相册 */
export const PutPhoto = (params: Data.PhotoCreateParams & { id: string }) => {
  return Put<Data.PhotoCreateParams & { id: string }>(
    buildUrl(`notes/${params.id}`),
    params
  );
};

/** 获取单个相册 */
export const GetPhoto = (params: { id: number | string }) => {
  return Get<Data.PhotoDetail>(buildUrl(`notes/${params.id}`));
};

/** 删除相册 */
export const DeletePhoto = (params: { id: number | string }) => {
  return Delete<null>(buildUrl(`notes/${params.id}`));
};
