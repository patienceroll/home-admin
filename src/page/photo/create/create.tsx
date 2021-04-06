import React from "react";
import {
  Create,
  ResourceProps,
  SimpleForm,
  TextInput,
  DateInput,
  ImageInput,
  ImageField,
} from "react-admin";

import RichInput from "../../../component/rich-text-input/rich-text-input";

import Style from "./create.module.scss";

const CreatePhoto: ResourceProps["create"] = (props) => {
  return (
    <Create {...props} title="新建相册">
      <SimpleForm>
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
    </Create>
  );
};

export default CreatePhoto;
