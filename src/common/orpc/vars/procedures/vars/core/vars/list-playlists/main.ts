import { orpcContractRootBase } from "../../../../../bases/root";
import { Schemas } from "./schemas";

export const listPlaylists = orpcContractRootBase
  .input(Schemas.Input)
  .output(Schemas.Output);
