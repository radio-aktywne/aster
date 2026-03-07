import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import type { PageViewInput } from "../../../types";
import type { Schemas } from "./schemas";

import { DashboardWidget } from "../../../../client/core/components/dashboard-widget";
import { LoadingWidget } from "../../../../common/core/components/generic/loading-widget";
import { Hydrated } from "../../../../isomorphic/generic/components/hydrated";
import { orpcServerSideQueryClient } from "../../../../server/orpc/vars/clients";
import { getQueryClient } from "../../../../server/query/lib/get-query-client";

export async function HomePageView({}: PageViewInput<
  typeof Schemas.Path,
  typeof Schemas.Query
>) {
  const { queryClient } = getQueryClient();

  void queryClient.prefetchQuery(
    orpcServerSideQueryClient.core.listPlaylists.queryOptions({
      input: { limit: null },
    }),
  );

  void queryClient.prefetchQuery(
    orpcServerSideQueryClient.core.getCurrentPlaylist.queryOptions(),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Hydrated fallback={<LoadingWidget />}>
        <DashboardWidget />
      </Hydrated>
    </HydrationBoundary>
  );
}
