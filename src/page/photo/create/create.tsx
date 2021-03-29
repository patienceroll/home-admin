import React from "react";
import { Create, ResourceProps, ImageField } from "react-admin";

const CreatePhoto: ResourceProps["create"] = (props) => {
  return (
    <Create {...props}>
      <ImageField />
    </Create>
  );
};

export default CreatePhoto;
