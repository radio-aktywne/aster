import * as z from "zod";

export const Schemas = {
  Input: z.object({
    playlist: z.string().nullable().pipe(z.uuidv4().nullable()),
  }),
  Output: z.object({
    playlist: z.string().nullable().pipe(z.uuidv4().nullable()),
  }),
};
