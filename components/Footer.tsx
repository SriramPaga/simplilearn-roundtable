// import Image from "next/image";
// import { Logo } from "./Logo";
// import { RSVPForm } from "./invite/RSVPForm";

// export const Footer = () => {
//   return (
//     <footer className="relative w-full overflow-hidden">
//       {/* Background image (top-aligned like reference) */}
//       <div className="absolute inset-0">
//         <Image
//           src="/images/venue.jpg"
//           alt="Venue background"
//           fill
//           className="object-cover object-top"
//           priority
//         />
//       </div>

//       {/* Foreground content */}
//       <div
//         className="
//           relative
//           max-w-[1440px]
//           mx-auto
//           px-6
//           lg:px-20
//           h-[317px]
//           lg:h-[457px]
//           flex
//           flex-col
//         "
//       >
//         {/* CTA block (top aligned) */}
//         <div className="pt-[24px] max-w-[1000px]">
//           <h2 className="text-white text-[28px] leading-[36px] font-bold mb-[16px]">
//             Space is limited.
//           </h2>

//           {/* RSVP Form */}
//          <RSVPForm inputBgClass="bg-[rgba(231,231,231,0.9)]" />

//         </div>

//         {/* Footer bottom (anchored to bottom edge) */}
//         <div className="mt-auto pb-[20px]">
//           <div
//             className="
//               flex
//               flex-col
//               md:flex-row
//               md:items-center
//               md:justify-between
//               gap-[10px]
//             "
//           >
//             {/* Logo */}
//             <Logo />

//             {/* Copyright */}
//             <p className="text-white text-[13px] leading-[18px]">
//               © 2009–2025 · Simplilearn Solutions. All Rights Reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };


import Image from "next/image";
import { Logo } from "./Logo";
import { RSVPForm } from "./invite/RSVPForm";

export const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/venue.jpg"
          alt="Venue background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60" />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          max-w-[1440px]
          mx-auto
          px-6
          lg:px-20
          py-8
          lg:h-[476px]
          flex
          flex-col
        "
      >
        {/* CTA */}
        <div
          className="
            flex
            flex-col
            items-center
            lg:items-start
            gap-4
            lg:gap-6
          "
        >
          <h2
            className="
              font-satoshi
              font-black
              text-white
              text-[20px]
              leading-[27px]
              lg:text-[30px]
              lg:leading-[41px]
              text-center
              lg:text-left
            "
          >
            Space is limited.
          </h2>

          {/* RSVP FORM */}
          <div
            className="
              w-full
              max-w-[389px]
              lg:max-w-none
              lg:flex
              lg:items-center
              lg:gap-[24px]
            "
          >
            <RSVPForm inputBgClass="bg-[rgba(231,231,231,0.9)]" />
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div
          className="
            mt-10
            lg:mt-auto
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          {/* LOGO */}
          <div className="w-[150px] h-[46px] lg:w-[280px] lg:h-[86px]">
            <Logo />
          </div>

          {/* COPYRIGHT */}
          <p
            className="
              font-satoshi
              font-medium
              text-white
              text-[13px]
              leading-[18px]
              lg:text-[20px]
              lg:leading-[27px]
              tracking-[0.02em]
              text-center
            "
          >
            © 2009–2025 · Simplilearn Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
