import { InstanceSpecificationWhereUniqueInput } from "../instanceSpecification/InstanceSpecificationWhereUniqueInput";

export type MinecraftServerUpdateInput = {
  instanceId?: string | null;
  instanceSpecification?: InstanceSpecificationWhereUniqueInput | null;
  serverName?: string | null;
  status?: string | null;
};
