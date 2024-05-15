import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MinecraftServerTitle } from "../minecraftServer/MinecraftServerTitle";

export const InstanceSpecificationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="amiId" source="amiId" />
        <TextInput label="instanceType" source="instanceType" />
        <TextInput label="keyName" source="keyName" />
        <ReferenceArrayInput
          source="minecraftServers"
          reference="MinecraftServer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MinecraftServerTitle} />
        </ReferenceArrayInput>
        <TextInput label="region" source="region" />
        <TextInput
          label="securityGroupIds"
          multiline
          source="securityGroupIds"
        />
        <TextInput label="subnetId" source="subnetId" />
      </SimpleForm>
    </Edit>
  );
};
