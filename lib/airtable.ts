const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY!;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID!;
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME ?? 'RSVPs';

if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
  throw new Error('Airtable environment variables are missing');
}

export async function createRSVP(email: string) {
  const response = await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [{ fields: { EmailId: email } }],
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }
}
