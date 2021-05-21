import React from "react";

import {
  ResourceProps,
  Create,
  ImageInput,
  TextInput,
  SimpleForm,
  ImageField,
  SaveButton,
} from "react-admin";
import Style from "./create.module.scss";

const CreateHomeItem: ResourceProps["create"] = (props) => {
  const { history } = props as any;
  return (
    <Create
      {...props}
      title="新建首页项目"
      successMessage="成功新建项目"
      onSuccess={() => history.go(-1)}
    >
      <SimpleForm
        submitOnEnter
        toolbar={
          <SaveButton label="保存" style={{ margin: "0 0 16px 16px" }} />
        }
      >
        <TextInput variant="outlined" source="title" required label="标题" />
        <TextInput variant="outlined" source="subTitle" label="子标题" />
        <TextInput variant="outlined" source="url" required label="地址" />
        <ImageInput
          className={Style.img_input}
          source="image"
          accept=".jpg,.png,.gif"
          required
          label="封面"
          placeholder={<p className={Style.img_placeholder}>请上传封面</p>}
        >
          <ImageField source="image" />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};

export default CreateHomeItem;
