import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { INSTANCESPECIFICATION_TITLE_FIELD } from "./InstanceSpecificationTitle";

export const InstanceSpecificationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="additionalParameters" source="additionalParameters" />
        <TextField label="amiId" source="amiId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="instanceType" source="instanceType" />
        <TextField label="keyName" source="keyName" />
        <TextField label="region" source="region" />
        <TextField label="securityGroupIds" source="securityGroupIds" />
        <TextField label="subnetId" source="subnetId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="MinecraftServer"
          target="instanceSpecificationId"
          label="MinecraftServers"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
