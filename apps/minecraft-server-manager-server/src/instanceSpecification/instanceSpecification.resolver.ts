import * as graphql from "@nestjs/graphql";
import { InstanceSpecificationResolverBase } from "./base/instanceSpecification.resolver.base";
import { InstanceSpecification } from "./base/InstanceSpecification";
import { InstanceSpecificationService } from "./instanceSpecification.service";

@graphql.Resolver(() => InstanceSpecification)
export class InstanceSpecificationResolver extends InstanceSpecificationResolverBase {
  constructor(protected readonly service: InstanceSpecificationService) {
    super(service);
  }
}
