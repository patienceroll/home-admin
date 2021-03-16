export type HomeListItem = {
  title: string;
  subTitle: string | undefined;
  url: string | undefined;
  image: string;
} & { _id: string };
