import { InstanceSpecificationWhereInput } from "./InstanceSpecificationWhereInput";
import { InstanceSpecificationOrderByInput } from "./InstanceSpecificationOrderByInput";

export type InstanceSpecificationFindManyArgs = {
  where?: InstanceSpecificationWhereInput;
  orderBy?: Array<InstanceSpecificationOrderByInput>;
  skip?: number;
  take?: number;
};
