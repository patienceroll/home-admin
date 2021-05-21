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

import Actions from "./actions";

const RenderList: ResourceProps["list"] = (props) => {
  return (
    <List {...props} title="首页" actions={<Actions />}>
      <Datagrid>
        <TextField
          source="title"
          label="标题"
          style={{ whiteSpace: "nowrap" }}
        />
        <TextField
          source="subTitle"
          label="子标题"
          style={{ whiteSpace: "nowrap" }}
        />
        <TextField source="url" label="地址" style={{ whiteSpace: "nowrap" }} />
        <ImageField source="image" label="封面" />
        <EditButton label="编辑" />
        <DeleteButton label="删除" />
      </Datagrid>
    </List>
  );
};

export default RenderList;
