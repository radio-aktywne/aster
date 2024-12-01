"use client";

import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Button, Loader, Select, Stack } from "@mantine/core";
import { useCallback, useState } from "react";

import {
  useMainForm,
  UseMainFormValues,
} from "../../../../../hooks/forms/use-main-form";
import { MainFormInput } from "./types";
import { getPlaylistLabel } from "./utils";

export function MainForm({ initialValues, onSave, validate }: MainFormInput) {
  const [saving, setSaving] = useState(false);

  const { _ } = useLingui();

  const { allowedValues, form, loading } = useMainForm({
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

  if (loading) return <Loader />;

  const playlistSelectData = allowedValues.playlist.map((value) => ({
    label: getPlaylistLabel(value),
    value: value,
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
