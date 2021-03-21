interface Options extends FilePropertyBag {
  fileName?: string;
}

type newFileType = (url: string, Options?: Options) => Promise<File>;

/** 创建一个 file 对象 */
const newFile: newFileType = (url, options = {}) => {
  let fileName: string = url.split("/").slice(-1)[0];
  if (options.fileName) fileName = options.fileName;
  delete options.fileName;
  return fetch(url)
    .then((res) => {
      return res.blob();
    })
    .then((blob) => {
      return new File([blob], fileName, options);
    });
};

export default newFile;
