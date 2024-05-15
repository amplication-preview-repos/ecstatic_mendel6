import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { InstanceSpecificationWhereUniqueInput } from "../instanceSpecification/InstanceSpecificationWhereUniqueInput";

export type MinecraftServerWhereInput = {
  id?: StringFilter;
  instanceId?: StringNullableFilter;
  instanceSpecification?: InstanceSpecificationWhereUniqueInput;
  serverName?: StringNullableFilter;
  status?: StringNullableFilter;
};
