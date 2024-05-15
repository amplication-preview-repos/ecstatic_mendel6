import { InstanceSpecificationWhereUniqueInput } from "../instanceSpecification/InstanceSpecificationWhereUniqueInput";

export type MinecraftServerCreateInput = {
  instanceId?: string | null;
  instanceSpecification?: InstanceSpecificationWhereUniqueInput | null;
  serverName?: string | null;
  status?: string | null;
};
