import React from "react";
import { Edit, ResourceProps, ImageField } from "react-admin";

const EditPhoto: ResourceProps["edit"] = (props) => {
  return (
    <Edit {...props}>
      <ImageField />
    </Edit>
  );
};

export default EditPhoto;
