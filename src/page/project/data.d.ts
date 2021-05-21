import { Record } from "ra-core";

/** 首页展示项 */
export interface HomeListItem extends Record {
  title: string;
  subTitle: string | undefined;
  url: string | undefined;
  image: string;
}

export type CreateHomeParamType = {
  title: string;
  subTitle?: string | undefined;
  url: string;
  image: string;
};
