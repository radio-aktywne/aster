"use client";

import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { useCallback } from "react";

import { updateCurrentPlaylist } from "../../../actions/dingo/update-current-playlist";
import { useGetCurrentPlaylist } from "../../../hooks/dingo/use-get-current-playlist";
import { useToasts } from "../../../hooks/use-toasts";
import { MainForm, MainFormData } from "./components/main-form";
import { MainWidgetInput } from "./types";

export function MainWidget({ playlist: prefetchedPlaylist }: MainWidgetInput) {
  const { _ } = useLingui();
  const toasts = useToasts();

  const { data: currentPlaylist } = useGetCurrentPlaylist();
  const playlist = currentPlaylist ?? prefetchedPlaylist;

  const handleSaveAfterValidation = useCallback(
    async (playlist: string) => {
      const { error } = await updateCurrentPlaylist({ id: playlist });

      if (error) {
        const translated = _(error);
        toasts.error(translated);
        return { playlist: translated };
      }

      toasts.success(_(msg({ message: "Playlist updated successfully" })));
    },
    [_, toasts],
  );

  const handleSave = useCallback(
    async (data: MainFormData) => {
      if (!data.playlist)
        return { playlist: _(msg({ message: "Playlist is required" })) };

      return handleSaveAfterValidation(data.playlist);
    },
    [_, handleSaveAfterValidation],
  );

  return (
    <MainForm initialValues={{ playlist: playlist?.id }} onSave={handleSave} />
  );
}
