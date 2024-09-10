"use server";

import { emifuse } from "../../api";
import { GetCurrentPlaylistProps } from "./types";

const errorMessage = "Getting current playlist failed.";

export async function getCurrentPlaylist({}: GetCurrentPlaylistProps = {}) {
  try {
    const { data, error, response } = await emifuse.GET("/playlist");

    if (error || !data) {
      if (response.status === 404) return { data: undefined, error: undefined };

      return { data: undefined, error: errorMessage };
    }
    return { data, error: undefined };
  } catch (error) {
    return { data: undefined, error: errorMessage };
  }
}
