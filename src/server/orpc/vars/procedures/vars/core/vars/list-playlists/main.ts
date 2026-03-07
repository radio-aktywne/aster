import { mapValues } from "es-toolkit/object";
import { isJSONValue } from "es-toolkit/predicate";

import { state } from "../../../../../../../state/vars/state";
import { orpcServerRootBase } from "../../../../../bases/root";

export const listPlaylists = orpcServerRootBase.core.listPlaylists.handler(
  async ({ errors, input }) => {
    const { data: listPlaylistsData } =
      await state.current.apis.pelican.playlistsList({
        query: mapValues(input ?? {}, (value) =>
          isJSONValue(value) ? JSON.stringify(value) : value,
        ),
      });

    if (listPlaylistsData === undefined) throw errors.INTERNAL_SERVER_ERROR();

    return listPlaylistsData;
  },
);
