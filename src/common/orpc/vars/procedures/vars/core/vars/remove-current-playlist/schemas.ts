import * as z from "zod";

import { DeletePlaylistResponseSchema } from "../../../../../../../apis/dingo/schemas";

export const Schemas = {
  Input: z.void(),
  Output: DeletePlaylistResponseSchema,
};
