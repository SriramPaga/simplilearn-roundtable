'use server';

import { rsvpSchema } from '@/lib/validation';
import { createRSVP } from '@/lib/airtable';

export type RSVPResult =
  | { success: true }
  | { success: false; error: string };

export async function submitRSVP(formData: FormData): Promise<RSVPResult> {
  const data = {
    email: formData.get('email'),
  };

  const parsed = rsvpSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, error: 'Please enter a valid email address' };
  }

  try {
    await createRSVP(parsed.data.email);
    return { success: true };
  } catch (error) {
    console.error('RSVP submission failed:', error);
    return {
      success: false,
      error: 'Failed to submit RSVP. Please try again.',
    };
  }
}
