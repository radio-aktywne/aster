import { state } from "../../../../../../../state/vars/state";
import { orpcServerRootBase } from "../../../../../bases/root";

export const getCurrentPlaylist =
  orpcServerRootBase.core.getCurrentPlaylist.handler(async () => {
    const {
      data: getCurrentPlaylistData,
      error: getCurrentPlaylistError,
      response: getCurrentPlaylistResponse,
    } = await state.current.apis.dingo.getPlaylist();

    if (getCurrentPlaylistResponse.status === 404) return null;
    if (getCurrentPlaylistError !== undefined)
      throw getCurrentPlaylistError as unknown;

    return getCurrentPlaylistData;
  });
