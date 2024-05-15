import { JsonValue } from "type-fest";
import { MinecraftServer } from "../minecraftServer/MinecraftServer";

export type InstanceSpecification = {
  additionalParameters: JsonValue;
  amiId: string | null;
  createdAt: Date;
  id: string;
  instanceType: string | null;
  keyName: string | null;
  minecraftServers?: Array<MinecraftServer>;
  region: string | null;
  securityGroupIds: string | null;
  subnetId: string | null;
  updatedAt: Date;
};
