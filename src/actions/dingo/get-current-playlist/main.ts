"use server";

import { DingoError } from "../../../lib/dingo/errors";
import { getCurrentPlaylist as internalGetCurrentPlaylist } from "../../../lib/dingo/get-current-playlist";
import { errors } from "./constants";
import { GetCurrentPlaylistInput, GetCurrentPlaylistOutput } from "./types";

export async function getCurrentPlaylist({}: GetCurrentPlaylistInput = {}): Promise<GetCurrentPlaylistOutput> {
  try {
    const { playlist } = await internalGetCurrentPlaylist();
    return { data: playlist };
  } catch (error) {
    if (error instanceof DingoError) return { error: errors.generic };
    throw error;
  }
}
