import "server-only";

import type { Sdk as DingoSDK } from "../../common/apis/dingo/sdk";
import type { Sdk as ICanHazDadJokeSDK } from "../../common/apis/icanhazdadjoke/sdk";
import type { Sdk as PelicanSDK } from "../../common/apis/pelican/sdk";
import type { Config } from "../config/types";

export type APIs = {
  dingo: DingoSDK;
  icanhazdadjoke: ICanHazDadJokeSDK;
  pelican: PelicanSDK;
};

export type State = {
  apis: APIs;
  config: Config;
};
