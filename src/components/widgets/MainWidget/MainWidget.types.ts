import { components as dingoComponents } from "../../../api/dingo";

export type MainWidgetProps = {
  playlist?: dingoComponents["schemas"]["GetPlaylistResponse"];
};
