"use client";

import { msg } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";
import { Button, Loader, Select, Stack } from "@mantine/core";
import { useCallback, useState } from "react";

import {
  useMainForm,
  UseMainFormValues,
} from "../../../../../hooks/forms/use-main-form";
import { useListPlaylists } from "../../../../../hooks/pelican/use-list-playlists";
import { MainFormInput } from "./types";
import { getPlaylistLabel } from "./utils";

export function MainForm({ initialValues, onSave, validate }: MainFormInput) {
  const [saving, setSaving] = useState(false);

  const { _ } = useLingui();

  const { data: playlists, loading: playlistsLoading } = useListPlaylists();

  const { form } = useMainForm({
    initialValues: initialValues,
    validate: validate,
  });

  const formSetErrors = form.setErrors;

  const handleSave = useCallback(
    async (data: UseMainFormValues) => {
      setSaving(true);
      try {
        const errors = await onSave?.(data);
        if (errors) formSetErrors(errors);
      } finally {
        setSaving(false);
      }
    },
    [formSetErrors, onSave],
  );

  if (playlistsLoading) return <Loader />;

  const playlistSelectData = playlists?.playlists.map((playlist) => ({
    label: getPlaylistLabel(playlist),
    value: playlist.id,
  }));

  return (
    <form onSubmit={form.onSubmit(handleSave)}>
      <Stack>
        <Select
          data={playlistSelectData}
          label={_(msg({ message: "Playlist" }))}
          required={true}
          {...form.getInputProps("playlist")}
        />
        <Button loading={saving} type="submit">
          {_(msg({ message: "Save" }))}
        </Button>
      </Stack>
    </form>
  );
}
