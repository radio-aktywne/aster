"use server";

import { pelican } from "../../api";
import { GetPlaylistsProps } from "./types";

const errorMessage = "Getting playlists failed.";

export async function getPlaylists({
  limit,
  offset,
  where,
  include,
  order,
}: GetPlaylistsProps = {}) {
  try {
    const { data, error } = await pelican.GET("/playlists", {
      params: {
        query: {
          limit: limit,
          offset: offset,
          where: where && JSON.stringify(where),
          include: include && JSON.stringify(include),
          order: order && JSON.stringify(order),
        },
      },
    });

    if (error) return { data: undefined, error: errorMessage };
    return { data, error: undefined };
  } catch (error) {
    return { data: undefined, error: errorMessage };
  }
}
