import type Data from "./data";

export const Get: Data.Get = (path, params = {}) => {
  params._timeStamp = +new Date();
  let query = "";
  Object.keys(params).forEach((key) => {
    query += `${key}=${params[key]}&`;
  });

  return fetch(`${path}?${query.substr(0, query.length - 1)}`, {
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((res: Data.BaseResponse<any>) => {
      if (res.code === 0) {
        return res;
      } else {
        return Promise.reject();
      }
    });
};

export const Post: Data.Post = (path, params = {}) => {
  params._timeStamp = +new Date();
  return fetch(path, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(params),
  })
    .then((response) => {
      return response.json();
    })
    .then((res: Data.BaseResponse<any>) => {
      if (res.code === 0) {
        return res;
      } else {
        return Promise.reject();
      }
    });
};

export const Put: Data.Put = (path, params = {}) => {
  params._timeStamp = +new Date();
  return fetch(path, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(params),
  })
    .then((response) => {
      return response.json();
    })
    .then((res: Data.BaseResponse<any>) => {
      if (res.code === 0) {
        return res;
      } else {
        return Promise.reject();
      }
    });
};

export const PostFormdata: Data.PostFormdata = (path, data) => {
  return fetch(path, {
    method: "POST",
    body: data,
  })
    .then((response) => {
      return response.json();
    })
    .then((res: Data.BaseResponse<any>) => {
      if (res.code === 0) {
        return res;
      } else {
        return Promise.reject();
      }
    });
};

export const buildUrl = (url: string) => {
  return `/api/v1/${url}`;
};
