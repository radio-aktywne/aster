import { GetCurrentPlaylistOutput } from "../../../lib/dingo/get-current-playlist";

export type MainWidgetInput = {
  playlist: GetCurrentPlaylistOutput["playlist"];
};
