import React from "react";
import { Admin, Resource, DataProvider } from "react-admin";

import getList from "./post/list";
import getOne from "./post/getOne";
import getManyReference from "./post/getManyReference";
import getMany from "./post/getMany";
import create from "./post/create";
import update from "./post/update";
import updateMany from "./post/updateMany";
import Delete from "./post/delete";
import deleteMany from "./post/deleteMany";

import Home from "./page/project";
import Photo from "./page/notes";

import "./App.css";

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
      <Admin dataProvider={dataProvider}>
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
