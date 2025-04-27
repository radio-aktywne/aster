import { UseListPlaylistsSuccessState } from "../../../../../hooks/pelican/use-list-playlists/types";

export function getPlaylistLabel(
  playlist: UseListPlaylistsSuccessState["data"]["playlists"][number],
) {
  return playlist.name;
}
