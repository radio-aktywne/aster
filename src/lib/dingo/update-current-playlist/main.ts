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
  const { data, error } = await dingo.PUT("/playlist", {
    body: { id: id },
  });

  if (error || !data) throw new DingoError();

  return { playlist: data };
}
