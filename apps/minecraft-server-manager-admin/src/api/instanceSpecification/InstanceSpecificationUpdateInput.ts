import { InputJsonValue } from "../../types";
import { MinecraftServerUpdateManyWithoutInstanceSpecificationsInput } from "./MinecraftServerUpdateManyWithoutInstanceSpecificationsInput";

export type InstanceSpecificationUpdateInput = {
  additionalParameters?: InputJsonValue;
  amiId?: string | null;
  instanceType?: string | null;
  keyName?: string | null;
  minecraftServers?: MinecraftServerUpdateManyWithoutInstanceSpecificationsInput;
  region?: string | null;
  securityGroupIds?: string | null;
  subnetId?: string | null;
};
