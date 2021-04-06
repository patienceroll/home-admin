import React from "react";
import { Edit, ResourceProps, ImageField } from "react-admin";

const EditPhoto: ResourceProps["edit"] = (props) => {
  return (
    <Edit {...props} title="编辑相册">
      <ImageField />
    </Edit>
  );
};

export default EditPhoto;
