import React, {
  forwardRef,
  memo,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import type { CSSProperties } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";

import { ReactComponent as X } from "src/assets/svg/x.svg";

import Style from "./index.module.scss";
import { UploadImage } from "src/fetch/common/common";

type UploadFileProps = {
  className?: string;
  style?: CSSProperties;
  inputProps?: Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "type" | "ref" | "onChange"
  >;
};

export type UploadFileRefType = {
  getFileList: () => File[];
  setFileList: React.Dispatch<React.SetStateAction<File[]>>;
  triggerUpload: () => Promise<string[]>;
};

const UploadFile = memo(
  forwardRef<UploadFileRefType, UploadFileProps>((props, ref) => {
    const { inputProps = {}, className = "", style = {} } = props;

    const input = useRef<HTMLInputElement>(null);

    const [fileList, setFileList] = useState<File[]>([]);
    const [open, setOpen] = useState(false);

    const onClick = () => {
      if (input.current) input.current.click();
    };

    const onClickX = (indexX: number) => () => {
      setFileList((list) => list.filter((_i, index) => index !== indexX));
    };

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files)
        setFileList((f) => f.concat(Array.from(e.target.files as FileList)));
    };

    useImperativeHandle(ref, () => ({
      getFileList() {
        return fileList;
      },
      setFileList,
      triggerUpload() {
        if (fileList.length === 0) return Promise.resolve([]);
        setOpen(true);
        const formData = new FormData();
        fileList.forEach((i) => formData.append("file", new Blob([i]), i.name));

        return UploadImage(formData)
          .then((res) => {
            const {
              data: { filePath },
            } = res;
            if (Array.isArray(filePath)) {
              return filePath;
            }
            return [filePath];
          })
          .finally(() => {
            setOpen(false);
          });
      },
    }));

    return (
      <div style={style} className={`${Style.ct} ${className}`}>
        <div onClick={onClick} className={Style.ct_inner}>
          <div style={{ width: "100%" }}>
            <div>请点击上传图片</div>
            <input
              onChange={onChangeInput}
              ref={input}
              style={{ height: 0, position: "absolute", zIndex: -1 }}
              type="file"
              multiple
              {...inputProps}
            />
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          {fileList.map((i, index) => (
            <div key={i.lastModified} className={Style.img_wrapper}>
              <X className={Style.X} onClick={onClickX(index)} />
              <img src={URL.createObjectURL(i)} alt="" />
            </div>
          ))}
        </div>
        <Backdrop open={open} style={{ zIndex: 1 }}>
          <CircularProgress />
        </Backdrop>
      </div>
    );
  })
);

export default UploadFile;
