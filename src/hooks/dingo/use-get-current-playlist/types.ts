import { MessageDescriptor } from "@lingui/core";

import { GetCurrentPlaylistSuccessOutput } from "../../../actions/dingo/get-current-playlist";

export type UseGetCurrentPlaylistInput = {
  interval?: number;
};

export type UseGetCurrentPlaylistLoadingState = {
  data?: never;
  error?: never;
  loading: true;
};

export type UseGetCurrentPlaylistErrorState = {
  data?: never;
  error: MessageDescriptor;
  loading: false;
};

export type UseGetCurrentPlaylistSuccessState = {
  data: GetCurrentPlaylistSuccessOutput["data"];
  error?: never;
  loading: false;
};

export type UseGetCurrentPlaylistState =
  | UseGetCurrentPlaylistErrorState
  | UseGetCurrentPlaylistLoadingState
  | UseGetCurrentPlaylistSuccessState;

export type UseGetCurrentPlaylistOutput = {
  refresh: () => Promise<void>;
} & UseGetCurrentPlaylistState;
