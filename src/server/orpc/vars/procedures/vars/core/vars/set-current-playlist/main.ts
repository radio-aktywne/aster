import { state } from "../../../../../../../state/vars/state";
import { orpcServerRootBase } from "../../../../../bases/root";

export const setCurrentPlaylist =
  orpcServerRootBase.core.setCurrentPlaylist.handler(
    async ({ errors, input }) => {
      const { data: putPlaylistData } =
        await state.current.apis.dingo.putPlaylist({ body: input });

      if (putPlaylistData === undefined) throw errors.INTERNAL_SERVER_ERROR();

      return putPlaylistData;
    },
  );
