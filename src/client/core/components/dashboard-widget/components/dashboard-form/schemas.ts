import * as z from "zod";

export const Schemas = {
  Values: z.object({
    playlist: z.string().nullable(),
  }),
};
