const container =
  'relative max-w-[1440px] mx-auto px-[20px] lg:px-[100px] h-[317px] lg:h-[476px] flex flex-col';

const headingText =
  'font-satoshi font-black text-white text-[19px] leading-[26px] lg:text-[30px] lg:leading-[41px]';

const copyrightText =
  'font-satoshi font-medium text-white text-[13px] leading-[18px] lg:text-[20px] lg:leading-[27px] tracking-[0.02em]';

  import Image from 'next/image';
import { Logo } from './Logo';
import { RSVPForm } from './invite/RSVPForm';

export const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background (decorative) */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/images/venue.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60" />
      </div>

      {/* Content */}
      <div className={container}>
        {/* CTA */}
        <div className="pt-[24px] lg:pt-[40px]">
          <h2 className={`${headingText} mb-[36px]`}>
            Space is limited.
          </h2>

          <RSVPForm
            inputBgClass="bg-[rgba(231,231,231,0.9)]"
            inputRadiusClass="rounded-[8px]"
          />
        </div>

        {/* Footer Bottom */}
        <div
          className="
            mt-10 lg:mt-auto
            flex flex-col
            items-start
            lg:flex-row lg:items-center lg:justify-between
            gap-4
          "
        >
          {/* Logo */}
          <div className="w-[150px] h-[46px] lg:w-[280px] lg:h-[86px]">
            <Logo />
          </div>

          {/* Copyright */}
          <p className={copyrightText}>
            © 2009–2025 · Simplilearn Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
