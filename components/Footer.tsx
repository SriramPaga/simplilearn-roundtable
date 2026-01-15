import Image from "next/image";
import { Logo } from "./Logo";
import { RSVPForm } from "./invite/RSVPForm";

export const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background image (top-aligned like reference) */}
      <div className="absolute inset-0">
        <Image
          src="/images/venue.jpg"
          alt="Venue background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Foreground content */}
      <div
        className="
          relative
          max-w-[1440px]
          mx-auto
          px-6
          lg:px-20
          h-[317px]
          lg:h-[457px]
          flex
          flex-col
        "
      >
        {/* CTA block (top aligned) */}
        <div className="pt-[24px] max-w-[1000px]">
          <h2 className="text-white text-[28px] leading-[36px] font-bold mb-[16px]">
            Space is limited.
          </h2>

          {/* RSVP Form */}
         <RSVPForm inputBgClass="bg-[rgba(231,231,231,0.9)]" />

        </div>

        {/* Footer bottom (anchored to bottom edge) */}
        <div className="mt-auto pb-[20px]">
          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-[10px]
            "
          >
            {/* Logo */}
            <Logo />

            {/* Copyright */}
            <p className="text-white text-[13px] leading-[18px]">
              © 2009–2025 · Simplilearn Solutions. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
