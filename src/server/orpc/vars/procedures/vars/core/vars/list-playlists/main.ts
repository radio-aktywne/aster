import { state } from "../../../../../../../state/vars/state";
import { orpcServerRootBase } from "../../../../../bases/root";

export const listPlaylists = orpcServerRootBase.core.listPlaylists.handler(
  async ({ errors, input }) => {
    const { data: listPlaylistsData } =
      await state.current.apis.pelican.playlistsList({ query: input });

    if (listPlaylistsData === undefined) throw errors.INTERNAL_SERVER_ERROR();

    return listPlaylistsData;
  },
);
