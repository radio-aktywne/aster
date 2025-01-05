"use server";

import { auth } from "../../../auth";
import { DingoError } from "../../../lib/dingo/errors";
import { updateCurrentPlaylist as internalUpdateCurrentPlaylist } from "../../../lib/dingo/update-current-playlist";
import { errors } from "./constants";
import { inputSchema } from "./schemas";
import {
  UpdateCurrentPlaylistInput,
  UpdateCurrentPlaylistOutput,
} from "./types";

export async function updateCurrentPlaylist(
  input: UpdateCurrentPlaylistInput,
): Promise<UpdateCurrentPlaylistOutput> {
  const session = await auth.auth();
  if (!session) return { error: errors.unauthorized };

  const parsed = inputSchema.safeParse(input);
  if (!parsed.success) return { error: errors.invalidInput };

  try {
    const { playlist } = await internalUpdateCurrentPlaylist({
      id: parsed.data.id,
    });
    return { data: playlist };
  } catch (error) {
    if (error instanceof DingoError) return { error: errors.generic };
    throw error;
  }
}
