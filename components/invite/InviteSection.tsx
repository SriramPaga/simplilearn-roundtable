import { RSVPForm } from "./RSVPForm";

export const InviteSection = () => {
  return (
    <section className="w-full bg-white">
      {/* 
        Outer container
        - max-w locked to 1440px per Figma
        - horizontal padding changes only at lg
      */}
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-[20px]          /* Mobile side padding (Figma: ~20px) */
          lg:px-[100px]      /* Desktop side padding (Figma: 100px) */
          pt-[64px]          /* Mobile top spacing */
          lg:pt-[96px]       /* Desktop top spacing */
          pb-[72px]          /* Mobile bottom spacing */
          lg:pb-[96px]       /* Desktop bottom spacing */
        "
      >
        {/* ================= RSVP FORM ================= */}
        {/* 
          NOTE:
          - Width & height controlled inside RSVPForm
          - Only vertical spacing handled here
          - Adjust margin-bottom here if Figma spacing changes
        */}
        <div className="mb-[48px] lg:mb-[64px]">
          <RSVPForm inputBgClass="bg-[rgba(231,231,231,0.2)]" />
        </div>

        {/* ================= BODY COPY (BLOCK 1 + 2) ================= */}
        {/* 
          Figma uses one visual text block, but semantically split
          Width differs between mobile & desktop → locked max-widths
        */}
        <div
          className="
            max-w-[389px]     /* Mobile text width (exact Figma) */
            lg:max-w-[1240px] /* Desktop text width (exact Figma) */
            mb-[40px]         /* Space before highlight question */
          "
        >
          <p
            className="
              font-satoshi
              font-medium
              text-[15px]       /* Mobile font size */
              leading-[27px]
              lg:text-[27px]    /* Desktop font size */
              lg:leading-[39px]
              text-black
              mb-[24px]         /* Gap between the two paragraphs */
            "
          >
            AI is accelerating change across every operational layer. Roles are
            shifting. Leadership models are collapsing and reforming. Frontline
            and mid-level managers will soon lead teams of people and intelligent
            agents.
          </p>

          <p
            className="
              font-satoshi
              font-medium
              text-[15px]
              leading-[27px]
              lg:text-[27px]
              lg:leading-[39px]
              text-black
            "
          >
            But even the most advanced enterprises are asking the same question:
          </p>
        </div>

        {/* ================= HIGHLIGHT QUESTION ================= */}
        {/* 
          Always centered
          Width + font sizes exactly from Figma
          Line break is intentional and matches design
        */}
        <h2
          className="
            font-satoshi
            font-black
            text-black
            text-center

            text-[25px]        /* Mobile */
            leading-[34px]

            lg:text-[40px]     /* Desktop */
            lg:leading-[54px]

            max-w-[347px]      /* Mobile width */
            lg:max-w-[703px]   /* Desktop width */

            mx-auto
            mb-[40px]          /* Space before final paragraph */
          "
        >
          Which capabilities will matter most,
          <br />
          and how do we build them at scale?
        </h2>

        {/* ================= FINAL PARAGRAPH ================= */}
        {/* 
          - Centered on mobile
          - Left-aligned on desktop
          - Width strictly follows Figma
        */}
        <p
          className="
            font-satoshi
            font-medium
            text-[15px]
            leading-[27px]

            lg:text-[27px]
            lg:leading-[39px]

            text-black

            max-w-[385px]      /* Mobile width */
            lg:max-w-[1241px]  /* Desktop width */

            mx-auto            /* Center on mobile */
            lg:mx-0            /* Align left on desktop */
          "
        >
          This invite-only roundtable gathers CHROs, CLOs, and enterprise
          workforce leaders for a candid, senior-level discussion on what’s
          coming next.
        </p>
      </div>
    </section>
  );
};
