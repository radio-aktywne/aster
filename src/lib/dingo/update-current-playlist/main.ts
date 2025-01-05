import "server-only";

import { dingo } from "../../../services/dingo";
import { DingoError } from "../errors";
import {
  UpdateCurrentPlaylistInput,
  UpdateCurrentPlaylistOutput,
} from "./types";

export async function updateCurrentPlaylist({
  id,
}: UpdateCurrentPlaylistInput): Promise<UpdateCurrentPlaylistOutput> {
  const { data, error, response } = await dingo.PUT("/playlist", {
    body: { id: id },
  });

  if (error || !data || !response.ok) throw new DingoError();

  return { playlist: data };
}
