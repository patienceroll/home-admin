/** 通用响应数据类型 */
export type BaseResponse<T> = {
  code: 0;
  data: T;
  msg: string;
};

/** 列表返回数据 */
type ListType<T> = {
  list: T[];
  total: number;
  page: number;
  perPage: number;
};

/** get请求 */
type Get = <T = any>(
  path: string,
  params?: Record<string, any>
) => Promise<BaseResponse<T>>;

/** post请求 */
type Post = <T = any>(
  path: string,
  params?: Record<string, any>
) => Promise<BaseResponse<T>>;

/** put请求 */
type Put = <T = any>(
  path: string,
  params?: Record<string, any>
) => Promise<BaseResponse<T>>;

/** postFormData请求 */
type PostFormdata = <T = any>(
  path: string,
  formData: FormData
) => Promise<BaseResponse<T>>;

/** 列表请求基本参数 */
type BaseListParams = {
  page: number;
  perPage: number;
};
