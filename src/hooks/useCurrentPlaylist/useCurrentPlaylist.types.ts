import { GetCurrentPlaylistProps } from "../../actions";
import { components } from "../../api/emifuse";

export type Playlist = components["schemas"]["GetPlaylistResponse"];

export type UseCurrentPlaylistProps = GetCurrentPlaylistProps & {
  interval?: number;
};
