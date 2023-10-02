import * as z from "zod";

export const workoutSchema = z.object({
  title: z.string().min(1).max(256),
});
