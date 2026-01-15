"use client";

import { useState } from "react";
import Image from "next/image";
import { submitRSVP } from "@/lib/actions";

type RSVPFormProps = {
  inputBgClass?: string;
  inputRadiusClass?: string;
};

export const RSVPForm = ({
  inputBgClass = "bg-[rgba(231,231,231,0.2)]",
  inputRadiusClass = "rounded-[3px] lg:rounded-[8px]",
}: RSVPFormProps) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setSuccess(false);
    const formData = new FormData();
    formData.append("email", email);
    await submitRSVP(formData);
    setLoading(false);
    setEmail("");
    setSuccess(true);

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:items-start
          gap-[12px]
          lg:gap-[24px]
        "
      >
        {/* INPUT */}
        <div
          className={`
            relative
            w-[389px]
            h-[45px]
            lg:w-[606px]
            lg:h-[81px]
            border
            border-[rgba(0,0,0,0.29)]
        
            ${inputBgClass}
             ${inputRadiusClass}
          `}
        >
          {/* ICON */}
          <span
            className="
    absolute
    left-[16.39px]
    top-[12px]

    lg:left-[24px]
    lg:top-[27.5px]
  "
          >
            <Image
              src="/icons/mail.png"
              alt="Email"
              width={24} /* mobile intrinsic */
              height={20}
              className="
      w-[23.8px]
      h-[19.5px]

      lg:w-[33px]
      lg:h-[26px]
    "
            />
          </span>
          {/* INPUT FIELD */}
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your work email to confirm your attendance"
            className="
              w-full
              h-full
              bg-transparent
              outline-none
              font-satoshi
              font-normal
              text-[13px]
              leading-[18px]
              lg:text-[20px]
              lg:leading-[27px]
              text-[rgba(0,0,0,0.7)]
              placeholder:text-[rgba(0,0,0,0.4)]
              pl-[58px]
              lg:pl-[80px]
              pr-[12px]
            "
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-[139px]
            h-[45px]
            lg:w-[251px]
            lg:h-[81px]
            rounded-[5px]
            lg:rounded-[8px]
            bg-[linear-gradient(90deg,rgba(245,171,64,0.9)_0%,#F5AB40_100%)]
            flex
            items-center
            justify-center
            font-satoshi
            font-bold
            text-[15px]
            leading-[20px]
            lg:text-[29px]
            lg:leading-[39px]
            text-white
            disabled:opacity-60
          "
        >
          RSVP Now
        </button>
      </div>
      {/* Success Message */}
      {success && (
        <div
          className="
      mt-[12px]
      px-[16px]
      py-[10px]
      rounded-[6px]
      bg-[#E6F6EA]
      border border-[#B6E2C1]
      text-[#1E7F4D]
      text-[13px]
      lg:text-[14px]
      font-satoshi
      font-medium
      flex
      items-center
      gap-[8px]
      animate-fade-in
      max-w-[400px]
    "
          role="alert"
        >
          {/* Optional icon */}
          <span className="text-[16px]">✅</span>

          <span>RSVP confirmed. We’ve saved your spot.</span>
        </div>
      )}
    </form>
  );
};
