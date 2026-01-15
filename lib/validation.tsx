import { z } from 'zod';

export const rsvpSchema = z.object({
  email: z.string().email(),
});

export type RSVPInput = z.infer<typeof rsvpSchema>;
