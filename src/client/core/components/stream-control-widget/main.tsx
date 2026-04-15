"use client";

import { msg } from "@lingui/core/macro";
import { Stack, Title } from "@mantine/core";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";

import type { StreamControlFormSubmitInput } from "./components/stream-control-form";
import type { StreamControlWidgetInput } from "./types";

import { getValidationIssue } from "../../../../common/orpc/lib/get-validation-issue";
import { isOrpcDefinedError } from "../../../../common/orpc/lib/is-orpc-defined-error";
import { useLocalization } from "../../../../isomorphic/localization/hooks/use-localization";
import { useNotifications } from "../../../../isomorphic/notifications/hooks/use-notifications";
import { orpcClientSideQueryClient } from "../../../orpc/vars/clients";
import { StreamControlForm } from "./components/stream-control-form";

export function StreamControlWidget({}: StreamControlWidgetInput) {
  const { localization } = useLocalization();
  const { notifications } = useNotifications();

  const getCurrentPlaylistQuery = useSuspenseQuery(
    orpcClientSideQueryClient.core.getCurrentPlaylist.queryOptions(),
  );

  const setCurrentPlaylistMutation = useMutation(
    orpcClientSideQueryClient.core.setCurrentPlaylist.mutationOptions(),
  );

  const removeCurrentPlaylistMutation = useMutation(
    orpcClientSideQueryClient.core.removeCurrentPlaylist.mutationOptions(),
  );

  const initialValues = useMemo(
    () => ({ playlist: getCurrentPlaylistQuery.data?.id || null }),
    [getCurrentPlaylistQuery.data?.id],
  );

  const handleSave = useCallback(
    async ({ values }: StreamControlFormSubmitInput) => {
      try {
        if (values.playlist === null) {
          await removeCurrentPlaylistMutation.mutateAsync();

          notifications.success({
            message: msg({ message: "Changes saved successfully" }),
          });

          return { values: { playlist: null } };
        } else {
          const { id } = await setCurrentPlaylistMutation.mutateAsync({
            id: values.playlist,
          });

          notifications.success({
            message: msg({ message: "Changes saved successfully" }),
          });

          return { values: { playlist: id } };
        }
      } catch (error) {
        if (isOrpcDefinedError(error) && error.code === "BAD_REQUEST") {
          notifications.error({ message: msg({ message: "Invalid input" }) });

          return {
            errors: {
              playlist: getValidationIssue({ error: error, path: "playlist" })
                .message,
            },
          };
        }

        notifications.error({
          message: msg({ message: "An unexpected error occurred" }),
        });

        throw error;
      }
    },
    [
      notifications.error,
      notifications.success,
      removeCurrentPlaylistMutation.mutateAsync,
      setCurrentPlaylistMutation.mutateAsync,
    ],
  );

  const handleError = useCallback(() => {
    notifications.error({ message: msg({ message: "Invalid input" }) });
  }, [notifications.error]);

  return (
    <Stack h="100%" w="100%">
      <Title ta="center">
        {localization.localize(msg({ message: "Stream Control" }))}
      </Title>
      <StreamControlForm
        initialValues={initialValues}
        onError={handleError}
        onSubmit={handleSave}
      />
    </Stack>
  );
}
