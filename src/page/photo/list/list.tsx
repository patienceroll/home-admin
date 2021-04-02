import React from "react";
import {
  List,
  ResourceProps,
  ImageField,
  TextField,
  Datagrid,
} from "react-admin";

const RenderList: ResourceProps["list"] = (props) => {
  return (
    <List {...props} title="相册">
      <Datagrid>
        <TextField source="title" label="标题" />
        <TextField source="describe" label="标题" />
        <TextField source="date" label="日期" />
        <ImageField source="cover" label="封面" />
      </Datagrid>
    </List>
  );
};

export default RenderList;
