import React from "react";
import { ResourceProps, Create, ImageInput, Resource } from "react-admin";

const CreateHomeItem: ResourceProps["create"] = (props) => {
  return (
    <Create {...props} title="新建首页项目">
      <Resource name="新建首页项目">
          <ImageInput source="http://gsea.top" >
              13123
          </ImageInput>
      </Resource>
    </Create>
  );
};

export default CreateHomeItem;
