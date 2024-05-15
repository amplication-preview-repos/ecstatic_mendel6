import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MinecraftServerServiceBase } from "./base/minecraftServer.service.base";

@Injectable()
export class MinecraftServerService extends MinecraftServerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
