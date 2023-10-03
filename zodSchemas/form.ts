import * as z from "zod";

export const exerciseSchema = z.object({
  title: z.string().min(1).max(256),
  sets: z.coerce.number().min(1).max(99),
  reps: z.coerce.number().min(1).max(99).optional(),
  durationSec: z.coerce.number().min(1).max(99).optional(),
});
