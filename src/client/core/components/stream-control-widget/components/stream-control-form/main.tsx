import { msg } from "@lingui/core/macro";
import { Button, Select } from "@mantine/core";
import { useSuspenseQuery } from "@tanstack/react-query";
import { isString } from "es-toolkit/predicate";

import type { StreamControlFormInput } from "./types";

import { useForm } from "../../../../../../isomorphic/core/hooks/use-form";
import { useLocalization } from "../../../../../../isomorphic/localization/hooks/use-localization";
import { orpcClientSideQueryClient } from "../../../../../orpc/vars/clients";
import { Schemas } from "./schemas";

export function StreamControlForm({
  initialValues,
  onError,
  onSubmit,
}: StreamControlFormInput) {
  const { localization } = useLocalization();

  const listPlaylistsQuery = useSuspenseQuery(
    orpcClientSideQueryClient.core.listPlaylists.queryOptions({
      input: { limit: null },
    }),
  );

  const { form, handleFormSubmit, submitting } = useForm({
    initialValues: initialValues,
    inputSchema: Schemas.Input,
    onError: onError,
    onSubmit: onSubmit,
    outputSchema: Schemas.Output,
  });

  const playlistSelectData = listPlaylistsQuery.data.playlists.map(
    (playlist) => ({
      label: playlist.name,
      value: playlist.id,
    }),
  );

  return (
    <form onSubmit={handleFormSubmit} style={{ display: "contents" }}>
      <Select
        data={playlistSelectData}
        errorProps={{
          title: [form.getInputProps("playlist").error].find(isString),
        }}
        key={form.key("playlist")}
        label={localization.localize(msg({ message: "Playlist" }))}
        required={true}
        styles={{ error: { position: "absolute" } }}
        {...form.getInputProps("playlist")}
      />
      <Button
        loading={submitting}
        mt="auto"
        style={{ flexShrink: 0 }}
        type="submit"
      >
        {localization.localize(msg({ message: "Save" }))}
      </Button>
    </form>
  );
}
