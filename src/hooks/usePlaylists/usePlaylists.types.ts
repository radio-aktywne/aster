import { GetPlaylistsProps } from "../../actions";
import { components } from "../../api/pelican";

export type Playlists = components["schemas"]["PlaylistList"];

export type UsePlaylistsProps = GetPlaylistsProps & {
  interval?: number;
};
