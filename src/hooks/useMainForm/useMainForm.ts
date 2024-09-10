import "client-only";

import { useForm } from "@mantine/form";
import { usePlaylists } from "../usePlaylists";
import { UseMainFormProps } from "./useMainForm.types";

export function useMainForm({ initialValues, validate }: UseMainFormProps) {
  const defaultValues = {
    playlist: null,
  };

  const form = useForm({
    initialValues: {
      playlist:
        initialValues?.playlist === undefined
          ? defaultValues.playlist
          : initialValues.playlist,
    },
    validate: validate,
  });

  const { playlists } = usePlaylists({ limit: 1000 });

  const playlistValues =
    playlists?.playlists.map((playlist) => playlist.id) ?? [];

  return {
    form,
    defaultValues,
    playlistValues,
    loading: playlists === undefined,
  };
}
