import "server-only";

import { dingo } from "../../../services/dingo";
import { DingoError } from "../errors";
import { GetCurrentPlaylistInput, GetCurrentPlaylistOutput } from "./types";

export async function getCurrentPlaylist({}: GetCurrentPlaylistInput = {}): Promise<GetCurrentPlaylistOutput> {
  const { data, error, response } = await dingo.GET("/playlist", {
    cache: "no-store",
  });

  if (error || !data || !response.ok) {
    if (response.status === 404) return { playlist: null };
    throw new DingoError();
  }

  return { playlist: data };
}
