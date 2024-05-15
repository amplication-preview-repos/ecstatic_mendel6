import { Module } from "@nestjs/common";
import { MinecraftServerModuleBase } from "./base/minecraftServer.module.base";
import { MinecraftServerService } from "./minecraftServer.service";
import { MinecraftServerController } from "./minecraftServer.controller";
import { MinecraftServerResolver } from "./minecraftServer.resolver";

@Module({
  imports: [MinecraftServerModuleBase],
  controllers: [MinecraftServerController],
  providers: [MinecraftServerService, MinecraftServerResolver],
  exports: [MinecraftServerService],
})
export class MinecraftServerModule {}
