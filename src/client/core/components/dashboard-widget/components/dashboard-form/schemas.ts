import * as z from "zod";

export const Schemas = {
  Values: z.object({
    playlist: z.uuidv4().nullable(),
  }),
};
