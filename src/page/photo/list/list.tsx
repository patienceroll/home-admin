import React from "react";
import { List, ResourceProps, ImageField } from "react-admin";

const RenderList: ResourceProps["list"] = (props) => {
  return (
    <List {...props}>
      <ImageField />
    </List>
  );
};

export default RenderList;
