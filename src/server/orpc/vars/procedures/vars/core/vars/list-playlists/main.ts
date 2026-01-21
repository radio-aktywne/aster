import { mapValues, pickBy } from "es-toolkit/object";

import { createQuerySerializer } from "../../../../../../../../common/apis/pelican/client/utils";
import { state } from "../../../../../../../state/vars/state";
import { orpcServerRootBase } from "../../../../../bases/root";

export const listPlaylists = orpcServerRootBase.core.listPlaylists.handler(
  async ({ input }) => {
    const { data: listPlaylistsData } =
      await state.current.apis.pelican.playlistsList({
        query: input,
        querySerializer: (query) =>
          new URLSearchParams([
            ...new URLSearchParams(createQuerySerializer()(query)),
            ...new URLSearchParams(
              mapValues(
                pickBy(query, (value) => value === null),
                String,
              ),
            ),
          ]).toString(),
        throwOnError: true,
      });

    return listPlaylistsData;
  },
);
