import "client-only";

import { useInterval } from "@mantine/hooks";
import { useCallback, useEffect, useState } from "react";
import { getCurrentPlaylist } from "../../actions";
import { Playlist, UseCurrentPlaylistProps } from "./useCurrentPlaylist.types";

export function useCurrentPlaylist({
  interval = 1000 * 5,
  ...getCurrentPlaylistProps
}: UseCurrentPlaylistProps = {}) {
  const [currentPlaylist, setCurrentPlaylist] = useState<Playlist>();

  const serializedGetCurrentPlaylistProps = JSON.stringify(
    getCurrentPlaylistProps,
  );

  const fetchCurrentPlaylist = useCallback(async () => {
    try {
      const parsedGetCurrentPlaylistProps = JSON.parse(
        serializedGetCurrentPlaylistProps,
      );
      const response = await getCurrentPlaylist(parsedGetCurrentPlaylistProps);
      if (response.error !== undefined) throw new Error(response.error);
      setCurrentPlaylist(response.data);
    } catch (error) {
      setCurrentPlaylist(undefined);
    }
  }, [serializedGetCurrentPlaylistProps]);

  const { start, stop } = useInterval(fetchCurrentPlaylist, interval);

  useEffect(() => {
    fetchCurrentPlaylist();
  }, [fetchCurrentPlaylist]);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  return { currentPlaylist, fetchCurrentPlaylist };
}
