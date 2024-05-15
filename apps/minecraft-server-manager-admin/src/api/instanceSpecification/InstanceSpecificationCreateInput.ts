import { InputJsonValue } from "../../types";
import { MinecraftServerCreateNestedManyWithoutInstanceSpecificationsInput } from "./MinecraftServerCreateNestedManyWithoutInstanceSpecificationsInput";

export type InstanceSpecificationCreateInput = {
  additionalParameters?: InputJsonValue;
  amiId?: string | null;
  instanceType?: string | null;
  keyName?: string | null;
  minecraftServers?: MinecraftServerCreateNestedManyWithoutInstanceSpecificationsInput;
  region?: string | null;
  securityGroupIds?: string | null;
  subnetId?: string | null;
};
