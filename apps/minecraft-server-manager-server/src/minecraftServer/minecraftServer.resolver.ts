import * as graphql from "@nestjs/graphql";
import { MinecraftServerResolverBase } from "./base/minecraftServer.resolver.base";
import { MinecraftServer } from "./base/MinecraftServer";
import { MinecraftServerService } from "./minecraftServer.service";

@graphql.Resolver(() => MinecraftServer)
export class MinecraftServerResolver extends MinecraftServerResolverBase {
  constructor(protected readonly service: MinecraftServerService) {
    super(service);
  }
}
