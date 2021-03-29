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

import Home from "./page/home/index";

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
          name="home"
          list={Home.List}
          edit={Home.Edit}
          create={Home.Create}
          // icon={PostIcon}
        />
      </Admin>
    </>
  );
};
export default App;
