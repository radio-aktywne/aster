import { state } from "../../../../../../../state/vars/state";
import { orpcServerRootBase } from "../../../../../bases/root";
import { authenticatedMiddleware } from "../../../../../middleware/authenticated";

export const removeCurrentPlaylist =
  orpcServerRootBase.core.removeCurrentPlaylist
    .use(authenticatedMiddleware)
    .handler(async ({ errors }) => {
      const { data: deletePlaylistData } =
        await state.current.apis.dingo.deletePlaylist();

      if (deletePlaylistData === undefined)
        throw errors.INTERNAL_SERVER_ERROR();
    });
