import { state } from "../../../../../../../state/vars/state";
import { orpcServerRootBase } from "../../../../../bases/root";

export const getCurrentPlaylist =
  orpcServerRootBase.core.getCurrentPlaylist.handler(async ({ errors }) => {
    const {
      data: getCurrentPlaylistData,
      response: getCurrentPlaylistResponse,
    } = await state.current.apis.dingo.getPlaylist();

    if (getCurrentPlaylistData === undefined) {
      if (getCurrentPlaylistResponse.status === 404) return null;
      throw errors.INTERNAL_SERVER_ERROR();
    }

    return getCurrentPlaylistData;
  });
