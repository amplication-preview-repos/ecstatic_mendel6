import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MinecraftServerService } from "./minecraftServer.service";
import { MinecraftServerControllerBase } from "./base/minecraftServer.controller.base";

@swagger.ApiTags("minecraftServers")
@common.Controller("minecraftServers")
export class MinecraftServerController extends MinecraftServerControllerBase {
  constructor(protected readonly service: MinecraftServerService) {
    super(service);
  }
}
