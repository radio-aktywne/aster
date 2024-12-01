import { components } from "../../../services/dingo";

export type GetCurrentPlaylistInput = {
  [key: string]: never;
};

export type GetCurrentPlaylistOutput = {
  playlist: components["schemas"]["GetPlaylistResponse"] | null;
};
