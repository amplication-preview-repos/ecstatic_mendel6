import { MinecraftServerWhereInput } from "./MinecraftServerWhereInput";
import { MinecraftServerOrderByInput } from "./MinecraftServerOrderByInput";

export type MinecraftServerFindManyArgs = {
  where?: MinecraftServerWhereInput;
  orderBy?: Array<MinecraftServerOrderByInput>;
  skip?: number;
  take?: number;
};
