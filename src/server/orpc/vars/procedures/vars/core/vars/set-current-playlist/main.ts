import { state } from "../../../../../../../state/vars/state";
import { orpcServerRootBase } from "../../../../../bases/root";
import { authenticatedMiddleware } from "../../../../../middleware/authenticated";

export const setCurrentPlaylist = orpcServerRootBase.core.setCurrentPlaylist
  .use(authenticatedMiddleware)
  .handler(async ({ errors, input }) => {
    const { data: putPlaylistData } =
      await state.current.apis.dingo.putPlaylist({ body: input });

    if (putPlaylistData === undefined) throw errors.INTERNAL_SERVER_ERROR();

    return putPlaylistData;
  });
