import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { InstanceSpecificationTitle } from "../instanceSpecification/InstanceSpecificationTitle";

export const MinecraftServerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
