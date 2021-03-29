import { Get } from "../../fetch/fetch";
import type { ListType } from "../../fetch/data";

import type Data from "./data";

/** 获取相册列表 */
export const GetPhotoList = (params: Data.PhotoListParams) => {
  return Get<ListType<Data.PhotoListItem>>("/photo", params);
};
