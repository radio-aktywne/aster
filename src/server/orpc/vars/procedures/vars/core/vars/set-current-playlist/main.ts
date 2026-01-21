import { state } from "../../../../../../../state/vars/state";
import { orpcServerRootBase } from "../../../../../bases/root";

export const setCurrentPlaylist =
  orpcServerRootBase.core.setCurrentPlaylist.handler(async ({ input }) => {
    const { data: setCurrentPlaylistData } =
      await state.current.apis.dingo.putPlaylist({
        body: input,
        throwOnError: true,
      });

    return setCurrentPlaylistData;
  });
