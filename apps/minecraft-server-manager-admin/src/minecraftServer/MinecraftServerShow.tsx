import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { INSTANCESPECIFICATION_TITLE_FIELD } from "../instanceSpecification/InstanceSpecificationTitle";

export const MinecraftServerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
