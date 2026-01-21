import { orpcContractRootBase } from "../../../../../bases/root";
import { Schemas } from "./schemas";

export const setCurrentPlaylist = orpcContractRootBase
  .input(Schemas.Input)
  .output(Schemas.Output);
