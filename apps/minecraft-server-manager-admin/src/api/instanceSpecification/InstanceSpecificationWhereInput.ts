import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MinecraftServerListRelationFilter } from "../minecraftServer/MinecraftServerListRelationFilter";

export type InstanceSpecificationWhereInput = {
  additionalParameters?: JsonFilter;
  amiId?: StringNullableFilter;
  id?: StringFilter;
  instanceType?: StringNullableFilter;
  keyName?: StringNullableFilter;
  minecraftServers?: MinecraftServerListRelationFilter;
  region?: StringNullableFilter;
  securityGroupIds?: StringNullableFilter;
  subnetId?: StringNullableFilter;
};
