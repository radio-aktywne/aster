import * as z from "zod";

import { GetPlaylistResponseSchema } from "../../../../../../../apis/dingo/schemas";

export const Schemas = {
  Input: z.undefined(),
  Output: GetPlaylistResponseSchema.nullable(),
};
