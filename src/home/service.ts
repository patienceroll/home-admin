import Fetch from "../fetch/fetch";

import Data from "./data";

const { get, post, buildUrl } = Fetch;

/** 获取首页项目数据 */
const GetHomeList = (param = {}) =>
  get<Data.HomeListItem[]>(buildUrl("home"), param);

/** 新建首页数据 */
const PostHomeItem = (params: Data.CreateHomeParamType) =>
  post<null>(buildUrl("home"), params);

const Request = {
  GetHomeList,
  PostHomeItem,
};

export default Request;
