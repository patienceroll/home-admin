import React from "react";
import { Admin, Resource } from "react-admin";
import type { DataProvider } from "react-admin";

import getList from "src/post/list";
import getOne from "src/post/getOne";
import getManyReference from "src/post/getManyReference";
import getMany from "src/post/getMany";
import create from "src/post/create";
import update from "src/post/update";
import updateMany from "src/post/updateMany";
import Delete from "src/post/delete";
import deleteMany from "src/post/deleteMany";
import Auth from "src/post/auth";

import Login from "src/page/login";
import Home from "src/page/project";
import Photo from "src/page/notes";

import "src/App.css";

const App = () => {
  const dataProvider: DataProvider = {
    getList,
    getOne,
    getMany,
    create,
    update,
    updateMany,
    delete: Delete,
    deleteMany,
    getManyReference,
  };

  return (
    <>
      <Admin dataProvider={dataProvider} authProvider={Auth} loginPage={Login}>
        <Resource
          name="project"
          options={{ label: "项目" }}
          list={Home.List}
          edit={Home.Edit}
          create={Home.Create}
        />
        <Resource
          name="notes"
          options={{ label: "随记" }}
          list={Photo.List}
          edit={Photo.Edit}
          create={Photo.Create}
        />
      </Admin>
    </>
  );
};
export default App;
