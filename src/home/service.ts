import Fetch from "../fetch/fetch";
import FetchType from "../fetch/data";

import Data from "./data";

const { get, post, buildUrl, put } = Fetch;

/** 获取首页项目数据 */
const GetHomeList = (param = {}) =>
  get<FetchType.ListType<Data.HomeListItem>>(buildUrl("home"), param);

/** 新建首页数据 */
const PostHomeItem = (params: Data.CreateHomeParamType) =>
  post<any>(buildUrl("home"), params);

/** 获取首页某一项 */
const GetHomeItem = (id: string | number) =>
  get<Data.HomeListItem>(buildUrl(`home/${id}`));

/** 编辑首页的某一项 */
const PutHomeItem = (
  params: Data.CreateHomeParamType & { id: number | string }
) => put<any>(buildUrl(`home/${params.id}`), { ...params, id: undefined });

const Request = {
  GetHomeList,
  PostHomeItem,
  GetHomeItem,
  PutHomeItem,
};

export default Request;
