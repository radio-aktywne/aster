import { useInterval } from "@mantine/hooks";
import "client-only";
import { useCallback, useEffect, useMemo, useState } from "react";

import { getCurrentPlaylist } from "../../../actions/dingo/get-current-playlist";
import {
  UseGetCurrentPlaylistInput,
  UseGetCurrentPlaylistOutput,
  UseGetCurrentPlaylistState,
} from "./types";

export function useGetCurrentPlaylist({
  interval = 1000 * 5,
}: UseGetCurrentPlaylistInput = {}): UseGetCurrentPlaylistOutput {
  const [state, setState] = useState<UseGetCurrentPlaylistState>({
    loading: true,
  });

  const refresh = useCallback(async () => {
    const { data, error } = await getCurrentPlaylist();
    if (error) setState({ error: error, loading: false });
    else setState({ data: data, loading: false });
  }, []);

  const { start, stop } = useInterval(refresh, interval);

  useEffect(() => {
    refresh();
  }, [refresh]);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  return useMemo(() => ({ ...state, refresh }), [state, refresh]);
}
