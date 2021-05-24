import { Get, Post, buildUrl, Put, Delete } from "../../fetch/fetch";
import type { ListType } from "../../fetch/data";

import type { HomeListItem, CreateHomeParamType } from "./data";

/** 获取首页项目数据 */
export const GetHomeList = (param = {}) =>
  Get<ListType<HomeListItem>>(buildUrl("project"), param);

/** 新建首页数据 */
export const PostHomeItem = (params: CreateHomeParamType) =>
  Post<HomeListItem>(buildUrl("project"), params);

/** 获取首页某一项 */
export const GetHomeItem = (id: string | number) =>
  Get<HomeListItem>(buildUrl(`project/${id}`));

/** 编辑首页的某一项 */
export const PutHomeItem = (params: CreateHomeParamType & { id: number | string }) =>
  Put<any>(buildUrl(`project/${params.id}`), { ...params, id: undefined });

/** 删除首页一项 */
export const DeleteHomeItem = (param: { id: number | string }) =>
  Delete<null>(buildUrl(`project/${param.id}`));


