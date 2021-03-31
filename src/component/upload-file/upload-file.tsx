import React, {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import type { CSSProperties } from "react";

import X from "../../assets/svg/x.svg";

import Style from "./upload-file.module.scss";

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

type UploadFileRefType = {};

const UploadFile = memo(
  forwardRef<UploadFileRefType, UploadFileProps>((props, ref) => {
    const { inputProps = {}, className = "", style = {} } = props;

    const input = useRef<HTMLInputElement>(null);

    const [fileList, setFileList] = useState<File[]>([]);

    const onClick = () => {
      if (input.current) input.current.click();
    };

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files)
        setFileList((f) => f.concat(Array.from(e.target.files as FileList)));
    };

    useImperativeHandle(ref, () => ({}));

    useEffect(() => {
      console.log(fileList);
    }, [fileList]);

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
        {fileList.map((i) => (
          <div key={i.lastModified} className={Style.img_wrapper}>
            <img src={URL.createObjectURL(i)} alt="" />
          </div>
        ))}
      </div>
    );
  })
);

export default UploadFile;
