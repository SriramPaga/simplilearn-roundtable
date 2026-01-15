import Image from "next/image";
import { Logo } from "./Logo";

export const HeroSection = () => {
  return (
    <section
      className="
        relative
        w-full
        h-[693px]
        lg:h-[693px]
        md:h-[693px]
        sm:h-[572px]
        overflow-hidden
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center rotate-180"
        />
      </div>

      {/* Gradient Overlay */}
      {/* <div
        className="
          absolute inset-0
          bg-[linear-gradient(287deg,rgba(28,78,241,0.45)_-11%,rgba(26,60,182,0.45)_106%)]
        "
      /> */}

      {/* Content */}
      <div
        className="
          relative z-10
          max-w-[1440px]
          mx-auto
          h-full
          px-[20px]
          lg:px-[100px]
          flex flex-col
        "
      >
        {/* Logo */}
        <div className="pt-[28px] lg:pt-[54px]">
          <div className="w-[150px] h-[46px] lg:w-[280px] lg:h-[86px]">
            <Logo />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center">

          {/* Invite + Subtitle */}
          <div
            className="
              flex flex-col
              lg:flex-row
              items-start
              lg:items-center
              gap-[12px]
              mb-[20px]
            "
          >
            {/* Invite Only */}
            <div
              className="
                bg-[#00FFFF]
                rounded-[6px]
                px-[16px]
                py-[6px]
                w-fit
              "
            >
              <span
                className="
                  font-satoshi
                  font-bold
                  text-[#25286A]
                  text-[16px]
                  lg:text-[25px]
                  leading-[22px]
                  lg:leading-[34px]
                "
              >
                Invite-Only
              </span>
            </div>

            {/* Subtitle */}
            <p
              className="
                font-satoshi
                font-bold
                text-[#00FFFF]
                text-[20px]
                lg:text-[24px]
                leading-[28px]
              "
            >
              An Executive Roundtable · Lunch
            </p>
          </div>

          {/* Main Heading */}
          <h1
            className="
              font-satoshi
              font-black
              text-[#F5AB40]
              max-w-[771px]
              text-[32px]
              leading-[40px]
              lg:text-[46px]
              lg:leading-[62px]
              mb-[32px]
            "
          >
            The Skills That Matter Next:
            <br />
            Preparing Your Workforce
            <br />
            & Leaders for the AI Era
          </h1>

          {/* Meta Info */}
          <div className="space-y-[12px]">
            {/* Date */}
            <div className="flex items-center gap-[12px]">
              <Image
                src="/icons/calendar.svg"
                alt=""
                width={24}
                height={27}
              />
              <span
                className="
                  font-satoshi
                  font-black
                  text-white
                  text-[18px]
                  lg:text-[30px]
                  leading-[24px]
                  lg:leading-[41px]
                "
              >
                February 20, 2026
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-[12px]">
              <Image
                src="/icons/location.svg"
                alt=""
                width={24}
                height={30}
              />
              <span
                className="
                  font-satoshi
                  font-black
                  text-white
                  text-[18px]
                  lg:text-[30px]
                  leading-[24px]
                  lg:leading-[41px]
                "
              >
                Chamberlain’s Steak & Fish House, Dallas
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
