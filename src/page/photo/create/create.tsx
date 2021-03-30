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
import RichTextInput from "ra-input-rich-text";

import Style from "./create.module.scss";

const CreatePhoto: ResourceProps["create"] = (props) => {
  const RichTextOptions = {
    toolbar: ["bold", "italic", "underline", "strike", "image"],
  };

  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" required label="标题" />
        <DateInput source="date" required label="日期" />

        <ImageInput
          className={Style.img_input}
          source="cover"
          accept=".jpg,.png,.gif"
          required
          label="封面"
          placeholder={
            <p style={{ height: 50, lineHeight: "50px" }}>请上传封面</p>
          }
        >
          <ImageField source="cover" />
        </ImageInput>

        <TextInput source="describe" required label="描述" />
        <RichTextInput
          label="文章内容"
          source="content"
          options={RichTextOptions}
        />
      </SimpleForm>
    </Create>
  );
};

export default CreatePhoto;
