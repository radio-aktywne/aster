import { state } from "../../../../../../../state/vars/state";
import { orpcServerRootBase } from "../../../../../bases/root";
import { authenticatedMiddleware } from "../../../../../middleware/authenticated";

export const getCurrentPlaylist = orpcServerRootBase.core.getCurrentPlaylist
  .use(authenticatedMiddleware)
  .handler(async ({ errors }) => {
    const { data: getPlaylistData, response: getPlaylistResponse } =
      await state.current.apis.dingo.getPlaylist();

    if (getPlaylistData === undefined) {
      if (getPlaylistResponse.status === 404) return null;
      throw errors.INTERNAL_SERVER_ERROR();
    }

    return getPlaylistData;
  });
