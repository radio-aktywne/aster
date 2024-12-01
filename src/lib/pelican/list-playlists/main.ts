import "server-only";

import { pelican } from "../../../services/pelican";
import { PelicanError } from "../errors";
import { ListPlaylistsInput, ListPlaylistsOutput } from "./types";

export async function listPlaylists({
  include,
  limit,
  offset,
  order,
  where,
}: ListPlaylistsInput = {}): Promise<ListPlaylistsOutput> {
  const { data, error } = await pelican.GET("/playlists", {
    params: {
      query: {
        include: include,
        limit: limit,
        offset: offset,
        order: order,
        where: where,
      },
    },
  });

  if (error) throw new PelicanError();

  return { playlists: data };
}
