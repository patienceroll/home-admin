import { Get } from "../../fetch/fetch";

const GetPhotoList = () => {
  return Get("/photo");
};
