import { components as emifuseComponents } from "../../../api/emifuse";

export type MainWidgetProps = {
  playlist?: emifuseComponents["schemas"]["GetPlaylistResponse"];
};
