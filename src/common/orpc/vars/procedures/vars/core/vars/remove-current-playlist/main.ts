import { orpcContractRootBase } from "../../../../../bases/root";
import { Schemas } from "./schemas";

export const removeCurrentPlaylist = orpcContractRootBase
  .input(Schemas.Input)
  .output(Schemas.Output);
