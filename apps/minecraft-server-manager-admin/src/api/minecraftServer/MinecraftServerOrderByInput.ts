import { SortOrder } from "../../util/SortOrder";

export type MinecraftServerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  instanceId?: SortOrder;
  instanceSpecificationId?: SortOrder;
  serverName?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
