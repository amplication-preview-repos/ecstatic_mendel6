import { Module } from "@nestjs/common";
import { InstanceSpecificationModuleBase } from "./base/instanceSpecification.module.base";
import { InstanceSpecificationService } from "./instanceSpecification.service";
import { InstanceSpecificationController } from "./instanceSpecification.controller";
import { InstanceSpecificationResolver } from "./instanceSpecification.resolver";

@Module({
  imports: [InstanceSpecificationModuleBase],
  controllers: [InstanceSpecificationController],
  providers: [InstanceSpecificationService, InstanceSpecificationResolver],
  exports: [InstanceSpecificationService],
})
export class InstanceSpecificationModule {}
