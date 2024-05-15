import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MinecraftServerModuleService } from "./minecraftservermodule.service";
import { LaunchServerInput } from "../minecraftServerModule/LaunchServerInput";
import { LaunchServerOutput } from "../minecraftServerModule/LaunchServerOutput";

@swagger.ApiTags("minecraftServerModules")
@common.Controller("minecraftServerModules")
export class MinecraftServerModuleController {
  constructor(protected readonly service: MinecraftServerModuleService) {}

  @common.Post("/launch-server")
  @swagger.ApiOkResponse({
    type: LaunchServerOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async LaunchServer(
    @common.Body()
    body: LaunchServerInput
  ): Promise<LaunchServerOutput> {
        return this.service.LaunchServer(body);
      }
}
