import { MinecraftServerWhereUniqueInput } from "./MinecraftServerWhereUniqueInput";
import { MinecraftServerUpdateInput } from "./MinecraftServerUpdateInput";

export type UpdateMinecraftServerArgs = {
  where: MinecraftServerWhereUniqueInput;
  data: MinecraftServerUpdateInput;
};
