import { InstanceSpecification as TInstanceSpecification } from "../api/instanceSpecification/InstanceSpecification";

export const INSTANCESPECIFICATION_TITLE_FIELD = "keyName";

export const InstanceSpecificationTitle = (
  record: TInstanceSpecification
): string => {
  return record.keyName?.toString() || String(record.id);
};
