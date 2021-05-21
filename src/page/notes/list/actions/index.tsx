import React, { memo } from "react";

import {
  sanitizeListRestProps,
  TopToolbar,
  CreateButton,
  useListContext,
} from "react-admin";

const Actions = memo((props) => {
  const { basePath } = useListContext();

  return (
    <TopToolbar {...sanitizeListRestProps(props)}>
      <CreateButton basePath={basePath} label="新建随记" />
    </TopToolbar>
  );
});

export default Actions;
