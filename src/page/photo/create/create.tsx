import React, { useEffect, useRef } from "react";
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
    modules: {
      toolbar: [["bold", "italic", "underline", "strike"], ["image"]],
    },
  };

  const configureQuill = (quill: any) => {
      console.log(quill);
  }


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
          placeholder={<p className={Style.img_placeholder}>请上传封面</p>}
        >
          <ImageField source="cover" />
        </ImageInput>

        <TextInput source="describe" type="textarea" required label="描述" />
        <RichTextInput
          label="文章内容"
          source="content"
          options={RichTextOptions}
          configureQuill={configureQuill}
          formClassName={Style.quill}
        />
      </SimpleForm>
    </Create>
  );
};

export default CreatePhoto;
