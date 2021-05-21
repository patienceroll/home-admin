import React from "react";
import {
  List,
  ResourceProps,
  Datagrid,
  TextField,
  ImageField,
  EditButton,
  DeleteButton,
} from "react-admin";

const RenderList: ResourceProps["list"] = (props) => {
  return (
    <List {...props} title="首页">
      <Datagrid>
        <TextField source="title" label="标题" />
        <TextField source="subTitle" label="子标题" />
        <TextField source="url" label="地址" />
        <ImageField source="image" label="封面" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default RenderList;
