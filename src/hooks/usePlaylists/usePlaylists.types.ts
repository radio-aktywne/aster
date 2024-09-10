import { GetPlaylistsProps } from "../../actions";
import { components } from "../../api/emitunes";

export type Playlists = components["schemas"]["PlaylistList"];

export type UsePlaylistsProps = GetPlaylistsProps & {
  interval?: number;
};
