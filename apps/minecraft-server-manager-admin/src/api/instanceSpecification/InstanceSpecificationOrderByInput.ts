import { SortOrder } from "../../util/SortOrder";

export type InstanceSpecificationOrderByInput = {
  additionalParameters?: SortOrder;
  amiId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  instanceType?: SortOrder;
  keyName?: SortOrder;
  region?: SortOrder;
  securityGroupIds?: SortOrder;
  subnetId?: SortOrder;
  updatedAt?: SortOrder;
};
