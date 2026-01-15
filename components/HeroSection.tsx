import { Logo } from "./Logo";
import Image from "next/image";
export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div
        className="
          absolute inset-0
          bg-[url('/images/hero-bg.jpg')]
          bg-cover bg-center
        "
      />
      <div className="absolute inset-0 bg-black/20" />

      {/* Content container */}
      <div
        className="
          relative z-10
          max-w-[1440px]
          mx-auto
          px-4
          sm:px-5
          lg:px-[100px]
          min-h-[572px]
          lg:min-h-[693px]
          flex flex-col
        "
      >
        {/* Logo */}
        <div className="pt-6 lg:pt-[54px]">
          <Logo />
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Invite Row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="
                bg-[#00FFFF]
                text-[#25286A]
                font-bold
                text-[16px]
                lg:text-[25px]
                px-4 py-1.5
                rounded-[6px]
                whitespace-nowrap
              "
            >
              Invite-Only
            </span>

            <span className="text-[#00FFFF] font-bold text-[16px] lg:text-[24px]">
              An Executive Roundtable · Lunch
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              max-w-[771px]
              font-satoshi
              font-black
              text-[#F5AB40]
              text-[32px]
              leading-[40px]
              lg:text-[46px]
              lg:leading-[62px]
              mb-6
            "
          >
            The Skills That Matter Next:
            <br />
            <span className="font-medium">

            Preparing Your Workforce
            <br />& Leaders for the AI Era
            </span>
          </h1>

          {/* Meta */}
          <div className="space-y-3 text-white font-black">
            <div className="flex items-center gap-3 text-[18px] lg:text-[30px]">
              <Image
                src="/icons/calendar.png"
                alt="Date"
                width={24}
                height={27}
                className="w-[18px] h-[20px] lg:w-[24px] lg:h-[27px]"
              />
              February 20, 2026
            </div>
            <div className="flex items-center gap-3 text-[18px] lg:text-[30px]">
              <Image
                src="/icons/location.png"
                alt="Date"
                width={24}
                height={230}
                className="w-[18px] h-[22px] lg:w-[24px] lg:h-[30px]"
              />
              Chamberlain’s Steak & Fish House, Dallas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
