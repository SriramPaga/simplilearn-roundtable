'use server';

export async function submitRSVP(formData: FormData) {
  const email = formData.get('email') as string;

  if (!email) {
    return { success: false, error: 'Email is required' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Please enter a valid email address' };
  }

  try {
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'RSVPs';

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      console.error('Airtable credentials not configured');
      return { success: false, error: 'Server configuration error' };
    }

    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                EmailId: email,
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Airtable API error:', errorData);
      return { success: false, error: 'Failed to submit RSVP. Please try again.' };
    }

    return { success: true };
  } catch (error) {
    console.error('Error submitting to Airtable:', error);
    return { success: false, error: 'An unexpected error occurred. Please try again.' };
  }
}
