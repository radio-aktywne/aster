import { getCurrentPlaylist } from "../../../../lib/dingo/get-current-playlist";
import { MainWidget } from "../../../widgets/main-widget";
import { RootPageViewInput } from "./types";

export async function RootPageView({}: RootPageViewInput) {
  const { playlist } = await getCurrentPlaylist();

  return <MainWidget playlist={playlist} />;
}
