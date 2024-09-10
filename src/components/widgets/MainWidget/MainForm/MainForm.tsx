"use client";

import { Button, Loader, Select, Stack } from "@mantine/core";
import { useCallback, useEffect } from "react";
import { useMainForm } from "../../../../hooks";
import { MainFormData, MainFormProps } from "./MainForm.types";

export function MainForm({ values, labels, validate, onSave }: MainFormProps) {
  const { form, defaultValues, playlistValues, loading } = useMainForm({
    initialValues: values,
    validate,
  });

  const formSetErrors = form.setErrors;

  const handleSave = useCallback(
    async (data: MainFormData) => {
      const errors = await onSave?.(data);
      if (errors != null) formSetErrors(errors);
    },
    [onSave, formSetErrors],
  );

  const formIsDirty = useCallback(form.isDirty, []); // eslint-disable-line react-hooks/exhaustive-deps
  const formSetFieldValue = form.setFieldValue;
  const formSetInitialValues = useCallback(form.setInitialValues, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!formIsDirty("playlist"))
      formSetFieldValue(
        "playlist",
        values.playlist === undefined
          ? defaultValues.playlist
          : values.playlist,
      );

    formSetInitialValues({
      playlist:
        values.playlist === undefined
          ? defaultValues.playlist
          : values.playlist,
    });
  }, [
    values.playlist,
    formIsDirty,
    formSetFieldValue,
    formSetInitialValues,
    defaultValues.playlist,
  ]);

  const playlistSelectData = playlistValues.map((playlist) => ({
    value: playlist,
    label: labels.fields.playlist.option(playlist),
  }));

  if (loading) return <Loader />;

  return (
    <form onSubmit={form.onSubmit(handleSave)}>
      <Stack>
        <Select
          label={labels.fields.playlist.title}
          data={playlistSelectData}
          required={true}
          {...form.getInputProps("playlist")}
        />
        <Button type="submit" disabled={!form.isDirty() || !form.isValid()}>
          {labels.buttons.save.label}
        </Button>
      </Stack>
    </form>
  );
}
