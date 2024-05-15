import { Module } from "@nestjs/common";
import { MinecraftServerModuleService } from "./minecraftservermodule.service";
import { MinecraftServerModuleController } from "./minecraftservermodule.controller";
import { MinecraftServerModuleResolver } from "./minecraftservermodule.resolver";

@Module({
  controllers: [MinecraftServerModuleController],
  providers: [MinecraftServerModuleService, MinecraftServerModuleResolver],
  exports: [MinecraftServerModuleService],
})
export class MinecraftServerModuleModule {}
