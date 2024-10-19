import { GetCurrentPlaylistProps } from "../../actions";
import { components } from "../../api/dingo";

export type Playlist = components["schemas"]["GetPlaylistResponse"];

export type UseCurrentPlaylistProps = GetCurrentPlaylistProps & {
  interval?: number;
};
