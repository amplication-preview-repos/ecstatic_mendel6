import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InstanceSpecificationService } from "./instanceSpecification.service";
import { InstanceSpecificationControllerBase } from "./base/instanceSpecification.controller.base";

@swagger.ApiTags("instanceSpecifications")
@common.Controller("instanceSpecifications")
export class InstanceSpecificationController extends InstanceSpecificationControllerBase {
  constructor(protected readonly service: InstanceSpecificationService) {
    super(service);
  }
}
