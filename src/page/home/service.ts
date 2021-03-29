import { Get, Post, buildUrl, Put } from "../../fetch/fetch";
import type { ListType } from "../../fetch/data";

import type { HomeListItem, CreateHomeParamType } from "./data";

/** 获取首页项目数据 */
const GetHomeList = (param = {}) =>
  Get<ListType<HomeListItem>>(buildUrl("home"), param);

/** 新建首页数据 */
const PostHomeItem = (params: CreateHomeParamType) =>
  Post<any>(buildUrl("home"), params);

/** 获取首页某一项 */
const GetHomeItem = (id: string | number) =>
  Get<HomeListItem>(buildUrl(`home/${id}`));

/** 编辑首页的某一项 */
const PutHomeItem = (params: CreateHomeParamType & { id: number | string }) =>
  Put<any>(buildUrl(`home/${params.id}`), { ...params, id: undefined });

const Request = {
  GetHomeList,
  PostHomeItem,
  GetHomeItem,
  PutHomeItem,
};

export default Request;
