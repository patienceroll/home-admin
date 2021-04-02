import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import RichTextInput from "ra-input-rich-text";
import { InputProps } from "react-admin";
import Quill from "quill";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogAction from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

import UploadFile, { UploadFileRefType } from "../upload-file/upload-file";

import "./rich-text-input.scss";

type RichInputRefType = {
  getQuill: () => Quill;
};

interface RichInputProps extends InputProps {}

const RichInput = memo(
  forwardRef<RichInputRefType, RichInputProps>((props, ref) => {
    const quillInstance = useRef<Quill>();
    const uploadFile = useRef<UploadFileRefType>(null);

    const [open, setOpen] = useState(false);

    /** 富文本编辑器配置 */
    const RichTextOptions = useMemo(
      () => ({
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ["clean"],
            ["image"],
          ],
        },
      }),
      []
    );

    const configureQuill = useCallback((quill: Quill) => {
      quillInstance.current = quill;
      quill.getModule("toolbar").addHandler("image", () => {
        setOpen(true);
      });
    }, []);

    const onClose = () => {
      setOpen(false);
    };

    const onConfirm = () => {
      if (uploadFile.current) {
        uploadFile.current.triggerUpload().then((paths) => {
          const { current } = quillInstance;
          if (current) {
            paths.forEach((path) => {
              current.insertEmbed(
                current.getSelection(true).index,
                "image",
                path
              );
            });
            setOpen(false);
          }
        });
      }
    };

    useEffect(() => {
      if (open && uploadFile.current) {
        uploadFile.current.setFileList([]);
      }
    }, [open]);

    useImperativeHandle(ref, () => ({
      getQuill() {
        if (quillInstance.current) return quillInstance.current;
        throw new Error("未获取到Quill实例");
      },
    }));

    return (
      <>
        <RichTextInput
          options={RichTextOptions}
          configureQuill={configureQuill}
          {...props}
        />
        <Dialog
          open={open}
          classes={{ container: "upload_img_dialog" }}
          onClose={onClose}
        >
          <DialogTitle>添加图片</DialogTitle>
          <DialogContent>
            <UploadFile ref={uploadFile} />
          </DialogContent>
          <DialogAction>
            <Button onClick={onClose} autoFocus color="primary">
              取消
            </Button>
            <Button color="primary" onClick={onConfirm} autoFocus>
              确定
            </Button>
          </DialogAction>
        </Dialog>
      </>
    );
  })
);

export default RichInput;
