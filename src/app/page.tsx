import { getCurrentPlaylist } from "../actions";
import { MainWidget } from "../components";

export const dynamic = "force-dynamic";

export default async function IndexPage() {
  const { data: playlist, error: playlistError } = await getCurrentPlaylist();

  if (playlistError !== undefined) throw new Error(playlistError);

  return <MainWidget playlist={playlist} />;
}
