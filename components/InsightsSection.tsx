const INSIGHTS: string[] = [
  'A clear view of the leadership & workforce capabilities that will matter most over the next 24–36 months.',
  'Insights from high-scale operating environments including the former CLO of McDonald’s on what truly scales and what breaks under pressure.',
  'Signals for where capability gaps may already be forming in your organization.',
  'Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.',
  'Actionable insights you can take straight into your next exec meeting.',
];

const sectionPadding =
  'max-w-[1440px] mx-auto px-[20px] lg:px-[104px] pt-[56px] lg:pt-[72px] pb-[64px]';

const sectionHeading =
  'font-satoshi font-black text-[#F5AB40] text-[24px] leading-[32px] lg:text-[40px] lg:leading-[54px]';

const bodyText =
  'font-satoshi font-medium text-black text-[15px] leading-[27px] lg:text-[20px] lg:leading-[30px]';

  import Image from 'next/image';
import { RSVPForm } from './invite/RSVPForm';

export const InsightsSection = () => {
  return (
    <section className="bg-white">
      <div className={sectionPadding}>
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] lg:gap-[64px] items-start">
          {/* IMAGE */}
          <div className="order-1 lg:order-2 relative z-0 flex justify-center lg:justify-end">
            <div className="relative w-[293px] h-[299px] lg:w-[570px] lg:h-[611px]">
              <Image
                src="/images/chess-pieces.jpg"
                alt="Strategic leadership chess pieces"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="order-2 lg:order-1 relative z-10 max-w-[801px]">
            <h2 className={`${sectionHeading} max-w-[687px] mb-[20px] lg:mb-[24px]`}>
              Go behind the curtain with real examples and high-scale insights
            </h2>

            <div className="pl-[18px] lg:pl-[48px]">
              <p
                className="
                  font-satoshi
                  font-bold lg:font-medium
                  text-black
                  text-[17px] leading-[27px]
                  lg:text-[25px] lg:leading-[34px]
                  mb-[16px] lg:mb-[20px]
                "
              >
                You’ll walk away with:
              </p>

              <ul className="space-y-[22px] lg:space-y-[30px]">
                {INSIGHTS.map((insight) => (
                  <li key={insight} className="flex items-start gap-[14px] lg:gap-[16px]">
                    <span
                      aria-hidden
                      className="
                        w-[3px]
                        h-[39px] lg:h-[59px]
                        bg-[#F5AB40]
                        flex-shrink-0
                        mt-[4px]
                      "
                    />
                    <p className={`${bodyText} max-w-[560px]`}>
                      {insight}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* RSVP */}
        <div className="mt-[40px] lg:mt-[56px]">
          <RSVPForm inputBgClass="bg-[rgba(231,231,231,0.2)]" />
        </div>
      </div>
    </section>
  );
};
