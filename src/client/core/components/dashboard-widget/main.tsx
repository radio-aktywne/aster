"use client";

import { msg } from "@lingui/core/macro";
import { Stack } from "@mantine/core";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";

import type { DashboardFormSubmitInput } from "./components/dashboard-form";
import type { DashboardWidgetInput } from "./types";

import { getValidationIssue } from "../../../../common/orpc/lib/get-validation-issue";
import { isOrpcDefinedError } from "../../../../common/orpc/lib/is-orpc-defined-error";
import { useNotifications } from "../../../../isomorphic/notifications/hooks/use-notifications";
import { orpcClientSideQueryClient } from "../../../orpc/vars/clients";
import { DashboardForm } from "./components/dashboard-form";

export function DashboardWidget({}: DashboardWidgetInput) {
  const { notifications } = useNotifications();

  const { data: getCurrentPlaylistData } = useSuspenseQuery(
    orpcClientSideQueryClient.core.getCurrentPlaylist.queryOptions(),
  );

  const setCurrentPlaylistMutation = useMutation(
    orpcClientSideQueryClient.core.setCurrentPlaylist.mutationOptions(),
  );

  const initialValues = useMemo(
    () => ({ playlist: getCurrentPlaylistData?.id || null }),
    [getCurrentPlaylistData?.id],
  );

  const handleSubmit = useCallback(
    async ({ values }: DashboardFormSubmitInput) => {
      if (values.playlist === null)
        return {
          errors: { playlist: msg({ message: "Playlist is required" }) },
        };

      try {
        const { id } = await setCurrentPlaylistMutation.mutateAsync({
          id: values.playlist,
        });

        notifications.success({
          message: msg({ message: "Playlist updated successfully" }),
        });

        return { values: { playlist: id } };
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
      setCurrentPlaylistMutation.mutateAsync,
    ],
  );

  const handleError = useCallback(() => {
    notifications.error({ message: msg({ message: "Invalid input" }) });
  }, [notifications.error]);

  return (
    <Stack align="stretch" gap="xl">
      <DashboardForm
        initialValues={initialValues}
        onError={handleError}
        onSubmit={handleSubmit}
      />
    </Stack>
  );
}
