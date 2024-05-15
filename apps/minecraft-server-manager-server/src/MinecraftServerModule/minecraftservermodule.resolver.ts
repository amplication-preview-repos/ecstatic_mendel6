import * as graphql from "@nestjs/graphql";
import { LaunchServerInput } from "../minecraftServerModule/LaunchServerInput";
import { LaunchServerOutput } from "../minecraftServerModule/LaunchServerOutput";
import { MinecraftServerModuleService } from "./minecraftservermodule.service";

export class MinecraftServerModuleResolver {
  constructor(protected readonly service: MinecraftServerModuleService) {}

  @graphql.Mutation(() => LaunchServerOutput)
  async LaunchServer(
    @graphql.Args()
    args: LaunchServerInput
  ): Promise<LaunchServerOutput> {
    return this.service.LaunchServer(args);
  }
}
