import { useForm } from "@mantine/form";
import "client-only";
import { useMemo } from "react";

import { useListPlaylists } from "../../pelican/use-list-playlists";
import { defaultValues, playlistsLimit } from "./constants";
import {
  UseMainFormInput,
  UseMainFormOutput,
  UseMainFormValues,
} from "./types";

export function useMainForm({
  initialValues,
  validate,
}: UseMainFormInput): UseMainFormOutput {
  const form = useForm<UseMainFormValues>({
    initialValues: {
      playlist: initialValues?.playlist ?? defaultValues.playlist,
    },
    validate: validate,
  });

  const { data: playlists, loading: playlistsLoading } = useListPlaylists({
    limit: playlistsLimit,
  });

  const allowedValues = useMemo(
    () => ({
      playlist: playlists?.playlists.map((playlist) => playlist.id) ?? [],
    }),
    [playlists],
  );

  return {
    allowedValues,
    defaultValues,
    form,
    loading: playlistsLoading,
  };
}
