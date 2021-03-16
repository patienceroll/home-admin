import Fetch from "../../fetch/fetch";

import Data from "./data";

const GetHomeList = (param = {}) =>
  Fetch.get<Data.HomeListItem[]>("/api/v1/home", param);

const Request = {
  GetHomeList,
};

export default Request;
