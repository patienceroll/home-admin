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
      Authorization: localStorage.getItem("token") || "",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((res: Data.BaseResponse<any>) => {
      if (res.code === 0) {
        return res;
      }

      return Promise.reject(res.msg);
    });
};

export const Post: Data.Post = (path, params = {}) => {
  params._timeStamp = +new Date();
  return fetch(path, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: localStorage.getItem("token") || "",
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
        return Promise.reject(res.msg);
      }
    });
};

export const Put: Data.Put = (path, params = {}) => {
  params._timeStamp = +new Date();
  return fetch(path, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: localStorage.getItem("token") || "",
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
        return Promise.reject(res.msg);
      }
    });
};

export const PostFormdata: Data.PostFormdata = (path, data) => {
  return fetch(path, {
    method: "POST",
    body: data,
    headers: {
      Authorization: localStorage.getItem("token") || "",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((res: Data.BaseResponse<any>) => {
      if (res.code === 0) {
        return res;
      } else {
        return Promise.reject(res.msg);
      }
    });
};

export const Delete = <T = any>(path: string, params?: Record<string, any>) => {
  return fetch(path, {
    method: "DELETE",
    body: JSON.stringify(params),
    headers: {
      Authorization: localStorage.getItem("token") || "",
    },
  })
    .then((res) => res.json())
    .then((res: Data.BaseResponse<T>) => {
      if (res.code === 0) {
        return res;
      }
      return Promise.reject(res.msg);
    });
};

export const buildUrl = (url: string) => {
  return `/api/v1/${url}`;
};
