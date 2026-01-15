# Simplilearn Executive Roundtable Landing Page

A pixel-perfect, responsive landing page for the Simplilearn Executive Roundtable event built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Server Components** for optimal performance
- **Server Actions** for form handling
- **Airtable Integration** for RSVP submissions
- **Fully Responsive** design (mobile and desktop)
- **Pixel-perfect** implementation matching the design specs

## Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun
- Airtable account (for RSVP functionality)

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd simplilearn-roundtable
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
AIRTABLE_API_KEY=your_api_key_here
AIRTABLE_BASE_ID=your_base_id_here
AIRTABLE_TABLE_NAME=RSVPs
```

**How to get Airtable credentials:**

1. Go to [Airtable](https://airtable.com) and sign up/login
2. Create a new base or use an existing one
3. Create a table named "RSVPs" with the following fields:
   - `Email` (Single line text)
   - `SubmittedAt` (Date with time)
4. Get your API key from [Airtable Account](https://airtable.com/account)
5. Get your Base ID from the API documentation or URL

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
simplilearn-roundtable/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page combining all sections
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── AgendaSection.tsx   # Event agenda component
│   ├── Button.tsx          # Reusable button component
│   ├── Card.tsx            # Reusable card component
│   ├── CTASection.tsx      # Call-to-action section with form
│   ├── ExploreSection.tsx  # What we'll explore section
│   ├── Footer.tsx          # Footer component
│   ├── HeroSection.tsx     # Hero section with main RSVP form
│   ├── Input.tsx           # Reusable input component
│   ├── InsightsSection.tsx # Insights and takeaways section
│   ├── Logo.tsx            # Simplilearn logo component
│   └── SpeakersSection.tsx # Featured speakers section
├── lib/
│   └── actions.ts          # Server actions for Airtable integration
├── public/                 # Static assets
├── .env.example            # Environment variables example
├── .gitignore             # Git ignore rules
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Netlify

1. Push your code to GitHub
2. Import the repository on [Netlify](https://netlify.com)
3. Add environment variables in Netlify dashboard
4. Deploy

## Technical Highlights

### Server Components

All components are Server Components by default, with only the form components marked as Client Components (`'use client'`) for interactivity.

### Server Actions

Form submissions use Next.js Server Actions for seamless server-side processing without API routes:

```typescript
// lib/actions.ts
'use server'

export async function submitRSVP(formData: FormData) {
  // Server-side form handling with Airtable
}
```

### Responsive Design

The application is fully responsive with mobile-first design:
- Mobile: Optimized for screens from 320px
- Tablet: Breakpoint at 768px
- Desktop: Breakpoint at 1024px

### Performance Optimizations

- Server-side rendering for optimal loading
- Minimal client-side JavaScript
- Optimized images and assets
- Tailwind CSS for minimal CSS bundle size

## Design Fidelity

The implementation closely matches the provided design with:
- Exact color scheme (Primary Blue: #0A1E42, Orange: #FF8C00, Cyan: #00D9FF)
- Matching typography and spacing
- Consistent component styling
- Responsive layouts for mobile and desktop

## Testing the RSVP Form

1. Ensure environment variables are set up
2. Fill in the email form
3. Check your Airtable base for the new record
4. The submission includes Email and SubmittedAt timestamp

## License

This project is created for the Simplilearn technical assessment.

## Support

For issues or questions, please contact the development team.
