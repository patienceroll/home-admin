import React from "react";
import { List, ResourceProps, Datagrid, TextField } from "react-admin";

const RenderList: ResourceProps["list"] = (props) => {
  return (
    <List {...props} title="首页">
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" title="标题" />
        <TextField source="subTitle" title="子标题" />
        <TextField source="url" title="地址" />
        <TextField source="image" title="封面" />
      </Datagrid>
    </List>
  );
};

export default RenderList;
