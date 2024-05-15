import { Injectable } from "@nestjs/common";
import { LaunchServerInput } from "../minecraftServerModule/LaunchServerInput";
import { LaunchServerOutput } from "../minecraftServerModule/LaunchServerOutput";

@Injectable()
export class MinecraftServerModuleService {
  constructor() {}
  async LaunchServer(args: LaunchServerInput): Promise<LaunchServerOutput> {
    throw new Error("Not implemented");
  }
}
