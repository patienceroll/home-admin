import React from "react";
import {
  Edit,
  ImageField,
  ImageInput,
  ResourceProps,
  SimpleForm,
  TextInput,
  useEditContext,
} from "react-admin";

const EditHomeItem: ResourceProps["edit"] = (props) => {
  const ctx = useEditContext(props);
  return (
    <Edit {...props} title="编辑">
      <SimpleForm>
        <TextInput source="title" required label="标题" />
        <TextInput source="subTitle" label="子标题" />
        <TextInput source="url" required label="地址" />
        <ImageInput source="image" required label="封面">
          <ImageField />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};

export default EditHomeItem;
