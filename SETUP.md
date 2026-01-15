# Quick Setup Guide

## Installation Complete! ✅

All images have been imported and the application is ready to run.

## Run the Application

```bash
cd /home/kcube/Newfolder/simplilearn/simplilearn-roundtable
npm run dev
```

Open your browser to: **http://localhost:3000**

## What's Included

### Images Added:
- ✅ Simplilearn logo
- ✅ Hero background (blue particles/network pattern)
- ✅ Rob Lauber photo (Former CLO McDonald's)
- ✅ Krishna Kumar photo (CEO Simplilearn)
- ✅ Sudipto Mitra photo (CRO Simplilearn)
- ✅ Chess pieces illustration
- ✅ Venue photo (Chamberlain's Steak & Fish House)

### Features:
- ✅ Next.js 15 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Server Components
- ✅ Server Actions for form handling
- ✅ Airtable integration ready
- ✅ Fully responsive design
- ✅ Real speaker photos
- ✅ Design assets from Resources folder

## Airtable Setup (Optional)

If you want the RSVP form to work:

1. Create a `.env.local` file in the project root:
```env
AIRTABLE_API_KEY=your_api_key_here
AIRTABLE_BASE_ID=your_base_id_here
AIRTABLE_TABLE_NAME=RSVPs
```

2. Create an Airtable base with a table containing:
   - Email (Single line text)
   - SubmittedAt (Date with time)

## Deployment

Ready to deploy to:
- Vercel (Recommended)
- Netlify
- Any Node.js hosting platform

Just push to GitHub and connect to your hosting provider!

## All images are located in:
`/home/kcube/Newfolder/simplilearn/simplilearn-roundtable/public/images/`
