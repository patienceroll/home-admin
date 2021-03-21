import React from "react";
import {
  Edit,
  ImageField,
  ImageInput,
  ResourceProps,
  SimpleForm,
  TextInput,
} from "react-admin";

const EditHomeItem: ResourceProps["edit"] = (props) => {
  return (
    <Edit {...props} title="编辑">
      <SimpleForm>
        <TextInput source="title" required label="标题" />
        <TextInput source="subTitle" label="子标题" />
        <TextInput source="url" required label="地址" />
        <ImageInput
          source="image"
          required
          label="封面"
          accept=".png,.jpg,.gif"
          placeholder={
            <div>
              <p>请上传图片</p>
              <p>支持.png,.jpg,.gif格式</p>
            </div>
          }
        >
          <ImageField />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};

export default EditHomeItem;
