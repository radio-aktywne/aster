"use client";

import { useCallback } from "react";
import {
  updateCurrentPlaylist,
  UpdateCurrentPlaylistProps,
} from "../../../actions";
import { labels } from "../../../config/labels";
import { useCurrentPlaylist, useToasts } from "../../../hooks";
import { MainForm, MainFormData } from "./MainForm";
import { MainWidgetProps } from "./MainWidget.types";

export function MainWidget({ playlist: prefetchedPlaylist }: MainWidgetProps) {
  const { success, error } = useToasts();

  const { currentPlaylist, fetchCurrentPlaylist } = useCurrentPlaylist();
  const playlist = currentPlaylist ?? prefetchedPlaylist;

  const handleUpdatePlaylist = useCallback(
    async (data: UpdateCurrentPlaylistProps) => {
      const { error: message } = await updateCurrentPlaylist(data);

      if (message !== undefined) {
        error(labels.widgets.main.toasts.update.playlist.error);
        return message;
      }

      success(labels.widgets.main.toasts.update.playlist.success);

      await fetchCurrentPlaylist();
    },
    [error, success, fetchCurrentPlaylist],
  );

  const handleSave = useCallback(
    async (data: MainFormData) => {
      if (data.playlist == null || data.playlist === "")
        return {
          playlist: labels.widgets.main.form.fields.playlist.errors.missing,
        };

      const updatePlaylistMessage = await handleUpdatePlaylist({
        id: data.playlist,
      });

      if (updatePlaylistMessage) return { playlist: updatePlaylistMessage };

      return null;
    },
    [handleUpdatePlaylist],
  );

  return (
    <MainForm
      values={{ playlist: playlist?.id ?? null }}
      labels={labels.widgets.main.form}
      onSave={handleSave}
    />
  );
}
