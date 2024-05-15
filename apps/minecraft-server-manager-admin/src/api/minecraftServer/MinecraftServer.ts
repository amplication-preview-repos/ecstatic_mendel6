import { InstanceSpecification } from "../instanceSpecification/InstanceSpecification";

export type MinecraftServer = {
  createdAt: Date;
  id: string;
  instanceId: string | null;
  instanceSpecification?: InstanceSpecification | null;
  serverName: string | null;
  status: string | null;
  updatedAt: Date;
};
