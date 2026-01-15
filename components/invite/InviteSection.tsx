import { RSVPForm } from "./RSVPForm";

export const InviteSection = () => {
  return (
    <section className="w-full bg-white">
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-[20px]
          lg:px-[100px]
          pt-[64px]
          lg:pt-[96px]
          pb-[72px]
          lg:pb-[96px]
        "
      >
        {/* RSVP FORM */}
        <div className="mb-[48px] lg:mb-[64px]">
          <RSVPForm inputBgClass="bg-[rgba(231,231,231,0.2)]" />
        </div>

        {/* BODY TEXT (combined block in Figma) */}
        <div
          className="
            max-w-[389px]
            lg:max-w-[1240px]
            mb-[40px]
          "
        >
          <p
            className="
              font-satoshi
              font-medium
              text-[15px]
              leading-[27px]
              lg:text-[27px]
              lg:leading-[39px]
              text-black
              mb-[24px]
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

        {/* HIGHLIGHT QUESTION */}
        <h2
          className="
            font-satoshi
            font-black
            text-black
            text-center

            text-[25px]
            leading-[34px]

            lg:text-[40px]
            lg:leading-[54px]

            max-w-[347px]
            lg:max-w-[703px]

            mx-auto
            mb-[40px]
          "
        >
          Which capabilities will matter most,
          <br />
          and how do we build them at scale?
        </h2>

        {/* FINAL PARAGRAPH */}
        <p
          className="
            font-satoshi
            font-medium
            text-[15px]
            leading-[27px]

            lg:text-[27px]
            lg:leading-[39px]

            text-black

            max-w-[385px]
            lg:max-w-[1241px]

            mx-auto
            lg:mx-0
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
