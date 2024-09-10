import "client-only";

import { useInterval } from "@mantine/hooks";
import { useCallback, useEffect, useState } from "react";
import { getPlaylists } from "../../actions";
import { Playlists, UsePlaylistsProps } from "./usePlaylists.types";

export function usePlaylists({
  interval = 1000 * 5,
  ...getPlaylistsProps
}: UsePlaylistsProps = {}) {
  const [playlists, setPlaylists] = useState<Playlists>();

  const serializedGetPlaylistsProps = JSON.stringify(getPlaylistsProps);

  const fetchPlaylists = useCallback(async () => {
    try {
      const parsedGetPlaylistsProps = JSON.parse(serializedGetPlaylistsProps);
      const response = await getPlaylists(parsedGetPlaylistsProps);
      if (response.error !== undefined) throw new Error(response.error);
      setPlaylists(response.data);
    } catch (error) {
      setPlaylists(undefined);
    }
  }, [serializedGetPlaylistsProps]);

  const { start, stop } = useInterval(fetchPlaylists, interval);

  useEffect(() => {
    fetchPlaylists();
  }, [fetchPlaylists]);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  return { playlists, fetchPlaylists };
}
