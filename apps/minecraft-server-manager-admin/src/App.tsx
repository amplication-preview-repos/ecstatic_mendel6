import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MinecraftServerList } from "./minecraftServer/MinecraftServerList";
import { MinecraftServerCreate } from "./minecraftServer/MinecraftServerCreate";
import { MinecraftServerEdit } from "./minecraftServer/MinecraftServerEdit";
import { MinecraftServerShow } from "./minecraftServer/MinecraftServerShow";
import { InstanceSpecificationList } from "./instanceSpecification/InstanceSpecificationList";
import { InstanceSpecificationCreate } from "./instanceSpecification/InstanceSpecificationCreate";
import { InstanceSpecificationEdit } from "./instanceSpecification/InstanceSpecificationEdit";
import { InstanceSpecificationShow } from "./instanceSpecification/InstanceSpecificationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MinecraftServerManager"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="MinecraftServer"
          list={MinecraftServerList}
          edit={MinecraftServerEdit}
          create={MinecraftServerCreate}
          show={MinecraftServerShow}
        />
        <Resource
          name="InstanceSpecification"
          list={InstanceSpecificationList}
          edit={InstanceSpecificationEdit}
          create={InstanceSpecificationCreate}
          show={InstanceSpecificationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
