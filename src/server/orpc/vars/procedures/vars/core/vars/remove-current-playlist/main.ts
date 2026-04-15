import { state } from "../../../../../../../state/vars/state";
import { orpcServerRootBase } from "../../../../../bases/root";

export const removeCurrentPlaylist =
  orpcServerRootBase.core.removeCurrentPlaylist.handler(async ({ errors }) => {
    const { data: deletePlaylistData } =
      await state.current.apis.dingo.deletePlaylist();

    if (deletePlaylistData === undefined) throw errors.INTERNAL_SERVER_ERROR();
  });
