import { MessageDescriptor } from "@lingui/core";

import {
  ListPlaylistsInput,
  ListPlaylistsSuccessOutput,
} from "../../../actions/pelican/list-playlists";

export type UseListPlaylistsInput = {
  include?: ListPlaylistsInput["include"];
  interval?: number;
  limit?: ListPlaylistsInput["limit"];
  offset?: ListPlaylistsInput["offset"];
  order?: ListPlaylistsInput["order"];
  where?: ListPlaylistsInput["where"];
};

export type UseListPlaylistsLoadingState = {
  data?: never;
  error?: never;
  loading: true;
};

export type UseListPlaylistsErrorState = {
  data?: never;
  error: MessageDescriptor;
  loading: false;
};

export type UseListPlaylistsSuccessState = {
  data: ListPlaylistsSuccessOutput["data"];
  error?: never;
  loading: false;
};

export type UseListPlaylistsState =
  | UseListPlaylistsErrorState
  | UseListPlaylistsLoadingState
  | UseListPlaylistsSuccessState;

export type UseListPlaylistsOutput = {
  refresh: () => Promise<void>;
} & UseListPlaylistsState;
