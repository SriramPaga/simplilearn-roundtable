import Image from "next/image";
import { RSVPForm } from "./invite/RSVPForm";

export const InsightsSection = () => {
  const insights = [
    "A clear view of the leadership & workforce capabilities that will matter most over the next 24–36 months.",
    "Insights from high-scale operating environments including the former CLO of McDonald’s on what truly scales and what breaks under pressure.",
    "Signals for where capability gaps may already be forming in your organization.",
    "Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.",
    "Actionable insights you can take straight into your next exec meeting.",
  ];

  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 pt-[56px] lg:pt-[72px] pb-[64px]">
        
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] lg:gap-[64px] items-start">

          {/* IMAGE — FIRST ON MOBILE */}
          <div
            className="
              order-1
              lg:order-2
              relative
              z-0
              flex
              justify-center
              lg:justify-end
              max-w-[570px]
            "
          >
            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[570px] lg:h-[611px]">
              <Image
                src="/images/chess-pieces.jpg"
                alt="Strategic leadership chess pieces"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* CONTENT — SECOND ON MOBILE */}
          <div
            className="
              order-2
              lg:order-1
              relative
              z-10
              max-w-[801px]
            "
          >
            {/* HEADING */}
            <h2
              className="
                font-satoshi
                font-black
                text-[#F5A623]
                text-[24px]
                leading-[24px]
                lg:text-[40px]
                lg:leading-[48px]
                max-w-[687px]
                mb-[20px]
                lg:mb-[24px]
              "
            >
              Go behind the curtain with real examples and high-scale insights
            </h2>

            {/* INDENTED BLOCK */}
            <div className="pl-[24px] lg:pl-[48px]">

              {/* SUBHEADING */}
              <p
                className="
                  font-satoshi
                  font-bold
                  text-[17px]
                  leading-[27px]
                  lg:font-medium
                  lg:text-[25px]
                  lg:leading-[32px]
                  text-black
                  mb-[16px]
                  lg:mb-[20px]
                "
              >
                You’ll walk away with:
              </p>

              {/* BULLETS */}
              <ul className="space-y-[20px] lg:space-y-[28px]">
                {insights.map((insight, index) => (
                  <li key={index} className="flex items-start gap-[14px] lg:gap-[16px]">

                    {/* ORANGE BAR */}
                    <span
                      className="
                        w-[2px]
                        bg-[#F5A623]
                        self-stretch
                        mt-[4px]
                        flex-shrink-0
                      "
                    />

                    {/* TEXT */}
                    <p
                      className="
                        font-satoshi
                        font-medium
                        text-[15px]
                        leading-[27px]
                        lg:text-[20px]
                        lg:leading-[30px]
                        text-black
                        max-w-[560px]
                      "
                    >
                      {insight}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* RSVP — BELOW BOTH COLUMNS */}
        <div className="mt-[40px] lg:mt-[56px]">
          <RSVPForm inputBgClass="bg-[rgba(231,231,231,0.2)]" />
        </div>
      </div>
    </section>
  );
};
