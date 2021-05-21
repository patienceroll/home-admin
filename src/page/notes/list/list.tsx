import React from "react";
import {
  List,
  ResourceProps,
  ImageField,
  TextField,
  EditButton,
  Datagrid,
  DeleteButton,
} from "react-admin";

import Actions from "./actions";

const RenderList: ResourceProps["list"] = (props) => {
  return (
    <List {...props} title="随记" actions={<Actions />}>
      <Datagrid>
        <TextField
          source="title"
          label="标题"
          style={{ whiteSpace: "nowrap" }}
        />
        <TextField source="describe" label="描述" />
        <TextField
          source="date"
          label="日期"
          style={{ whiteSpace: "nowrap" }}
        />
        <ImageField source="cover" label="封面" />
        <EditButton label="编辑" />
        <DeleteButton label="删除" />
      </Datagrid>
    </List>
  );
};

export default RenderList;
