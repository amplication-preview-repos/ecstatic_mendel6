import { MinecraftServer as TMinecraftServer } from "../api/minecraftServer/MinecraftServer";

export const MINECRAFTSERVER_TITLE_FIELD = "serverName";

export const MinecraftServerTitle = (record: TMinecraftServer): string => {
  return record.serverName?.toString() || String(record.id);
};
