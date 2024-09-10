"use server";

import { emifuse } from "../../api";
import { UpdateCurrentPlaylistProps } from "./types";

const genericErrorMessage = "Updating current playlist failed.";
const badRequestErrorMessage = "Invalid data.";

export async function updateCurrentPlaylist({
  id,
}: UpdateCurrentPlaylistProps) {
  try {
    const { data, error, response } = await emifuse.PUT("/playlist", {
      body: { id },
    });

    if (error || !data) {
      if (response.status === 400)
        return { data: undefined, error: badRequestErrorMessage };

      return { data: undefined, error: genericErrorMessage };
    }
    return { data, error: undefined };
  } catch (error) {
    return { data: undefined, error: genericErrorMessage };
  }
}
