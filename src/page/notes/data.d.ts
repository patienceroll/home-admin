import type { BaseListParams } from "../../fetch/data";

/** 相册列表项 */
export type PhotoListItem = {
  /** 标题 */
  title: string;
  /** 日期 */
  date: string;
  /** 封面 */
  cover: string;
  /** 描述 */
  describe: string;
  id: string;
};

/** 相册详情 */
type PhotoDetail = PhotoListItem & {
  content: string;
};

/** 相册列表分页参数 */
type PhotoListParams = BaseListParams & {};

/** 新建相册参数 */
type PhotoCreateParams = Omit<PhotoListItem, "id"> & { content: string };
