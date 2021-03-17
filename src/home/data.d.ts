export type HomeListItem = {
  title: string;
  subTitle: string | undefined;
  url: string | undefined;
  image: string;
} & { _id: string };

export type CreateHomeParamType = {
  title: string;
  subTitle?: string | undefined;
  url: string;
  image: string;
};
