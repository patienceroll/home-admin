import React from "react";
import {
  ResourceProps,
  Create,
  ImageInput,
  TextInput,
  SimpleForm,
  ImageField,
} from "react-admin";

const CreateHomeItem: ResourceProps["create"] = (props) => {
  const { history } = props as any;
  return (
    <Create {...props} title="新建首页项目" onSuccess={() => history.go(-1)}>
      <SimpleForm submitOnEnter>
        <TextInput source="title" required label="标题" />
        <TextInput source="subTitle" label="子标题" />
        <TextInput source="url" required label="地址" />
        <ImageInput source="image" required label="封面">
          <ImageField source="image" />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};

export default CreateHomeItem;
