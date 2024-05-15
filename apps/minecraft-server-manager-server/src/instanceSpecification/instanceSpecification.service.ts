import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InstanceSpecificationServiceBase } from "./base/instanceSpecification.service.base";

@Injectable()
export class InstanceSpecificationService extends InstanceSpecificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
