import { MessageDescriptor } from "@lingui/core";

import {
  UpdateCurrentPlaylistInput as InternalUpdateCurrentPlaylistInput,
  UpdateCurrentPlaylistOutput as InternalUpdateCurrentPlaylistOutput,
} from "../../../lib/dingo/update-current-playlist";

export type UpdateCurrentPlaylistInput = {
  id: InternalUpdateCurrentPlaylistInput["id"];
};

export type UpdateCurrentPlaylistSuccessOutput = {
  data: InternalUpdateCurrentPlaylistOutput["playlist"];
  error?: never;
};

export type UpdateCurrentPlaylistErrorOutput = {
  data?: never;
  error: MessageDescriptor;
};

export type UpdateCurrentPlaylistOutput =
  | UpdateCurrentPlaylistErrorOutput
  | UpdateCurrentPlaylistSuccessOutput;
