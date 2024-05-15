import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { InstanceSpecificationTitle } from "../instanceSpecification/InstanceSpecificationTitle";

export const MinecraftServerCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="instanceId" source="instanceId" />
        <ReferenceInput
          source="instanceSpecification.id"
          reference="InstanceSpecification"
          label="InstanceSpecification"
        >
          <SelectInput optionText={InstanceSpecificationTitle} />
        </ReferenceInput>
        <TextInput label="serverName" source="serverName" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
