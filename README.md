Simplilearn Executive Roundtable – Landing Page
Technical Assessment: SDE-1 (Next.js & AI-Driven Development) submission

🔗 **Live Demo:** https://simplilearn-roundtable.vercel.app/  
📦 **GitHub Repo:** https://github.com/SriramPaga/simplilearn-roundtable

Overview

Pixel-perfect implementation of the Simplilearn Executive Roundtable landing page based strictly on the provided Figma designs.

Focus areas:
-Exact design fidelity
-Modern Next.js App Router usage
-Clean, modular TypeScript
-Secure server-side form submission
-This is an implementation task, not a redesign.

Evaluation Criteria – At a Glance

✅ Design Accuracy
1:1 Figma match (spacing, fonts, colors, alignment)
Responsive only for 1440px (desktop) and 430px (mobile) as specified

✅ Next.js Implementation
App Router
Server Components by default
Server Actions used for form submission
No API routes, no client-side secrets

✅ Code Quality
Modular components
Strong TypeScript (no any)
Intent-based Tailwind usage
Clear separation of concerns

✅ Functionality
RSVP form submits successfully to Airtable
Server-side validation
Success & error handling


Tech Stack
-Next.js 14 (App Router)
-TypeScript
-Tailwind CSS
-next/font/local (Satoshi)
-Server Actions
-Airtable REST API
-Zod
-next/image

⚠️ No UI libraries, CSS frameworks, or animation libraries were used — by design.

Key Architectural Decisions & Trade-offs
Design Fidelity vs Fluid Layout
--Fixed widths/heights are intentionally used in several sections
--This ensures pixel-perfect alignment, text wrapping, and visual rhythm
--Responsiveness is implemented only at required breakpoints (1440px & 430px)
In a production system, these values would be abstracted into tokens or made fluid.
For this assessment, design accuracy was prioritized by intent.
Content Rendering Notes
--In the Insights section, text output and wrapping are preserved exactly as per Figma
--Minor structural refactors were done for readability without visual changes

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
│    ├─ actions/          # Server Actions
│    │   └─ submitRSVP.ts
│    ├─ airtable.ts       # Airtable client
│    └─ validators.ts     # Zod schemas
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

ENV variables - create .env.local
AIRTABLE_API_KEY=your_api_key
AIRTABLE_BASE_ID=your_base_id
AIRTABLE_TABLE_NAME=RSVPs


Airtable table fields:
-Email – Single line text
-SubmittedAt – Date with time

Running the Project Locally
npm install
npm run dev


Open:
👉 http://localhost:3000

Build & Production
npm run build
npm start

Version Compliance (Assessment-Safe)

Notes for Reviewers

-Server Actions are used intentionally instead of API routes
-No unnecessary libraries or abstractions
-All refactors were done with zero visual changes
-Code reflects real-world, production-style frontend practices

Author:
Sriram
Frontend / Full-Stack Developer
Technical Assessment Submission