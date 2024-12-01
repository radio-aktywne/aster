import { components } from "../../../services/dingo";

export type UpdateCurrentPlaylistInput = {
  id: string;
};

export type UpdateCurrentPlaylistOutput = {
  playlist: components["schemas"]["PutPlaylistResponse"];
};
