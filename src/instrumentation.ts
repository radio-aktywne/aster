import { createClient as createDingoClient } from "./common/apis/dingo/client";
import { Sdk as DingoSDK } from "./common/apis/dingo/sdk";
import { createClient as createICanHazDadJokeClient } from "./common/apis/icanhazdadjoke/client";
import { Sdk as ICanHazDadJokeSDK } from "./common/apis/icanhazdadjoke/sdk";
import { createClient as createPelicanClient } from "./common/apis/pelican/client";
import { Sdk as PelicanSDK } from "./common/apis/pelican/sdk";
import { createUrl } from "./common/generic/lib/create-url";
import { loadConfig } from "./server/config/lib/load-config";
import { state } from "./server/state/vars/state";

export async function register() {
  const { config } = await loadConfig();

  const apis = {
    dingo: new DingoSDK({
      client: createDingoClient({
        baseUrl: createUrl({
          host: config.apis.dingo.host,
          path: config.apis.dingo.path,
          port: config.apis.dingo.port,
          scheme: config.apis.dingo.scheme,
        }).url,
      }),
    }),

    icanhazdadjoke: new ICanHazDadJokeSDK({
      client: createICanHazDadJokeClient({
        baseUrl: createUrl({
          host: config.apis.icanhazdadjoke.host,
          path: config.apis.icanhazdadjoke.path,
          port: config.apis.icanhazdadjoke.port,
          scheme: config.apis.icanhazdadjoke.scheme,
        }).url,
      }),
    }),

    pelican: new PelicanSDK({
      client: createPelicanClient({
        baseUrl: createUrl({
          host: config.apis.pelican.host,
          path: config.apis.pelican.path,
          port: config.apis.pelican.port,
          scheme: config.apis.pelican.scheme,
        }).url,
      }),
    }),
  };

  state.current = {
    apis: apis,
    config: config,
  };
}
