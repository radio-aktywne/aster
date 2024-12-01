import { MessageDescriptor } from "@lingui/core";

import { GetCurrentPlaylistOutput as InternalGetCurrentPlaylistOutput } from "../../../lib/dingo/get-current-playlist";

export type GetCurrentPlaylistInput = {
  [key: string]: never;
};

export type GetCurrentPlaylistSuccessOutput = {
  data: InternalGetCurrentPlaylistOutput["playlist"];
  error?: never;
};

export type GetCurrentPlaylistErrorOutput = {
  data?: never;
  error: MessageDescriptor;
};

export type GetCurrentPlaylistOutput =
  | GetCurrentPlaylistErrorOutput
  | GetCurrentPlaylistSuccessOutput;
