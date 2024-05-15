import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { INSTANCESPECIFICATION_TITLE_FIELD } from "../instanceSpecification/InstanceSpecificationTitle";

export const MinecraftServerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MinecraftServers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="instanceId" source="instanceId" />
        <ReferenceField
          label="InstanceSpecification"
          source="instancespecification.id"
          reference="InstanceSpecification"
        >
          <TextField source={INSTANCESPECIFICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="serverName" source="serverName" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
