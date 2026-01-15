Simplilearn Executive Roundtable – Landing Page

Technical Assessment Submission (SDE-1 / Frontend)

🔗 **Live Demo:** https://simplilearn-roundtable.vercel.app/  
📦 **GitHub Repo:** https://github.com/SriramPaga/simplilearn-roundtable

Overview
This repository contains a pixel-perfect, responsive landing page for the Simplilearn Executive Roundtable event, implemented strictly as per the provided Figma design.

-The project is built to demonstrate:
-Exact Figma-to-code accuracy
-Clean, readable component architecture
-Proper use of modern Next.js (App Router) patterns
-Responsive correctness across desktop and mobile breakpoints
-This implementation intentionally avoids over-engineering and aligns with real-world frontend technical assessment expectations.

Key Focus Areas

🎯 Pixel-perfect UI (no approximations)

🧩 Reusable, well-scoped components

⚡ Minimal JavaScript, maximum clarity

📱 Design-driven responsiveness

🧠 Clear Server vs Client component separation

Tech Stack (and Why)
Technology	Reason
Next.js 15 (App Router)	Latest stable version, Server Components by default
React 18	Concurrent rendering, required by Next.js
TypeScript	Type safety and production-ready code
Tailwind CSS	Utility-first styling for pixel-accurate layouts
next/font/local	Local Satoshi Variable font (no CDN dependency)
Server Actions	Form submission without API routes

⚠️ No UI libraries, CSS frameworks, or animation libraries were used — by design.

Engineering Decisions (For Reviewers)
1. Pixel-Perfect Design Fidelity
-Spacing, font sizes, line heights, and widths match Figma specs exactly
-Tailwind arbitrary values (w-[389px], leading-[27px], etc.) are used intentionally
-No “close enough” styling or visual shortcuts

2. Responsive Strategy

-Breakpoints strictly follow the design:
-Desktop: 1440px
-Mobile: 430px
-Layout remains stable between 430px → 1440px
-No scaling hacks or overflow fixes

3. Typography

-Satoshi Variable loaded locally via next/font/local
-Font weights used exactly as per design: 400 / 500 / 700 / 900
-Font sizes and line heights match Figma values

4. Styling Approach
-Tailwind CSS only
-No external CSS files
-No inline <style> tags
-Conditional styling handled via component props (e.g., footer form)

5. RSVP Form Architecture

-Implemented using Next.js Server Actions
-Client Components used only where interactivity is required
-Visual success feedback shown after submission
-Same form component reused across sections with contextual styling


Project Structure
simplilearn-roundtable/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Tailwind directives only
├── components/
│   ├── HeroSection.tsx
│   ├── InviteSection.tsx
│   ├── InsightsSection.tsx
│   ├── AgendaSection.tsx
│   ├── SpeakersSection.tsx
│   ├── Footer.tsx
│   ├── Card.tsx
│   ├── Logo.tsx
│   └── invite/
│       └── RSVPForm.tsx
├── lib/
│   └── actions.ts          # Server Actions (RSVP submission)
├── public/
│   ├── images/
│   └── icons/
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json

RSVP Functionality
-How It Works
-Email is submitted via a Server Action
-No API routes used
-Minimal client-side JavaScript
-Clear success feedback after submission
-Environment Variables
-Create a .env.local file:

AIRTABLE_API_KEY=your_api_key
AIRTABLE_BASE_ID=your_base_id
AIRTABLE_TABLE_NAME=RSVPs


Airtable table fields:

Email – Single line text
SubmittedAt – Date with time

Running the Project Locally
npm install
npm run dev


Open:
👉 http://localhost:3000

Build & Production
npm run build
npm start

Version Compliance (Assessment-Safe)

All dependencies are latest stable and safe for evaluation:
-Next.js: 15.1.x
-React: 18.3.x
-TypeScript: 5.x
-Tailwind CSS: 3.4.x
-ESLint: Next.js recommended
-No experimental or canary features are used.
-What Reviewers Should Look For

✔ Exact spacing and alignment
✔ Clean Tailwind usage
✔ Reusable, focused components
✔ Correct Server vs Client component separation
✔ Stable responsive behavior
✔ No unnecessary dependencies

Notes

-Built specifically for a frontend technical assessment
-Design accuracy prioritized over abstraction
-Some values may appear “hard-coded” — this is intentional for pixel precision


Author:
Sriram
Frontend / Full-Stack Developer
Technical Assessment Submission