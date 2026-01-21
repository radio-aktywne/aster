import { msg } from "@lingui/core/macro";
import { Button, Select } from "@mantine/core";
import { useSuspenseQuery } from "@tanstack/react-query";

import type { DashboardFormInput } from "./types";

import { useForm } from "../../../../../../isomorphic/core/hooks/use-form";
import { useLocalization } from "../../../../../../isomorphic/localization/hooks/use-localization";
import { orpcClientSideQueryClient } from "../../../../../orpc/vars/clients";
import { Schemas } from "./schemas";

export function DashboardForm({
  initialValues,
  onError,
  onSubmit,
}: DashboardFormInput) {
  const { localization } = useLocalization();

  const { data: listPlaylistsData } = useSuspenseQuery(
    orpcClientSideQueryClient.core.listPlaylists.queryOptions({
      input: { limit: null },
    }),
  );

  const { form, handleFormSubmit, submitting } = useForm({
    initialValues: initialValues,
    onError: onError,
    onSubmit: onSubmit,
    schema: Schemas.Values,
  });

  const playlistSelectData = listPlaylistsData.playlists.map((playlist) => ({
    label: playlist.name,
    value: playlist.id,
  }));

  return (
    <form onSubmit={handleFormSubmit} style={{ display: "contents" }}>
      <Select
        data={playlistSelectData}
        key={form.key("playlist")}
        label={localization.localize(msg({ message: "Playlist" }))}
        required={true}
        {...form.getInputProps("playlist")}
      />
      <Button loading={submitting} type="submit">
        {localization.localize(msg({ message: "Save" }))}
      </Button>
    </form>
  );
}
