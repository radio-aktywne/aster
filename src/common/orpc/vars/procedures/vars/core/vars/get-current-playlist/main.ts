import { orpcContractRootBase } from "../../../../../bases/root";
import { Schemas } from "./schemas";

export const getCurrentPlaylist = orpcContractRootBase
  .input(Schemas.Input)
  .output(Schemas.Output);
