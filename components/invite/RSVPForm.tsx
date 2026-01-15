"use client";

import { useState } from "react";
import Image from "next/image";
import { submitRSVP } from "@/lib/actions";

type RSVPFormProps = {
  inputBgClass?: string;
};

export const RSVPForm = ({
  inputBgClass = "bg-[rgba(231,231,231,0.2)]",
}: RSVPFormProps) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("email", email);
    await submitRSVP(formData);
    setLoading(false);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col lg:flex-row gap-[12px] lg:gap-[24px]">
        {/* INPUT */}
        <div
          className={`
            relative
            w-[389px]
            h-[45px]
            lg:w-[606px]
            lg:h-[81px]
            rounded-[3px]
            lg:rounded-[8px]
            border
            border-[#BDBDBD]
            ${inputBgClass}
            flex
            items-center
          `}
        >
          {/* Icon */}
          <div className="absolute left-[22px] lg:left-[24px]">
            <Image
              src="/icons/mail.png"
              alt="Email"
              width={24}
              height={20}
              className="lg:w-[33px] lg:h-[26px]"
            />
          </div>

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your work email to confirm your attendance"
            className="
              w-full
              h-full
              pl-[56px]
              lg:pl-[72px]
              pr-[16px]
              bg-transparent
              outline-none
              font-satoshi
              text-[14px]
              lg:text-[20px]
              text-[#6B6B6B]
              placeholder:text-[#9E9E9E]
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
            font-satoshi
            font-bold
            text-[15px]
            lg:text-[29px]
            text-white
            flex
            items-center
            justify-center
          "
        >
          RSVP Now
        </button>
      </div>
    </form>
  );
};
