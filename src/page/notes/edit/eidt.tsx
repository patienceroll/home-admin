import React from "react";
import {
  Edit,
  ResourceProps,
  ImageField,
  SimpleForm,
  TextInput,
  DateInput,
  ImageInput,
  SaveButton,
} from "react-admin";

import RichInput from "../../../component/rich-text-input";

import Style from "./edit.module.scss";

const EditPhoto: ResourceProps["edit"] = (props) => {
  return (
    <Edit {...props} title="编辑相册">
      <SimpleForm
        toolbar={
          <SaveButton label="保存" style={{ margin: "0 0 16px 16px" }} />
        }
      >
        <TextInput variant="outlined" source="title" required label="标题" />
        <DateInput variant="outlined" source="date" required label="日期" />

        <ImageInput
          className={Style.img_input}
          variant="outlined"
          source="cover"
          accept=".jpg,.png,.gif"
          required
          label="封面"
          placeholder={<p className={Style.img_placeholder}>请上传封面</p>}
        >
          <ImageField source="cover" />
        </ImageInput>

        <TextInput
          variant="outlined"
          multiline
          rows={4}
          source="describe"
          type="textarea"
          required
          label="描述"
        />

        <RichInput variant="outlined" label="文章内容" source="content" />
      </SimpleForm>
    </Edit>
  );
};

export default EditPhoto;
