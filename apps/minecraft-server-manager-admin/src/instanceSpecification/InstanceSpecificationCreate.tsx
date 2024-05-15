import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MinecraftServerTitle } from "../minecraftServer/MinecraftServerTitle";

export const InstanceSpecificationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
