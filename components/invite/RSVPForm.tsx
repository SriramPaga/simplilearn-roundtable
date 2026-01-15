'use client';

import { useState, useTransition } from 'react';
import Image from 'next/image';
import { submitRSVP } from '@/lib/actions/submitRSVP';
import type { RSVPResult } from '@/lib/actions/submitRSVP';

type RSVPFormProps = {
  inputBgClass?: string;
  inputRadiusClass?: string;
};

export const RSVPForm = ({
  inputBgClass = 'bg-[rgba(231,231,231,0.2)]',
  inputRadiusClass = 'rounded-[3px] lg:rounded-[8px]',
}: RSVPFormProps) => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const isFooter = inputBgClass.includes('0.9');

  function handleSubmit(formData: FormData) {
    setSuccess(false);
    setError(null);

    startTransition(async () => {
      const result: RSVPResult = await submitRSVP(formData);

      if (!result.success) {
        setError(result.error);
        return;
      }

      setEmail('');
      setSuccess(true);

      setTimeout(() => setSuccess(false), 3000);
    });
  }

  return (
    <form action={handleSubmit} className="w-full">
      <div className="flex flex-col lg:flex-row lg:items-start gap-[12px] lg:gap-[24px]">
        {/* INPUT */}
        <div
          className={`
            relative
            w-[389px] h-[45px]
            lg:w-[606px] lg:h-[81px]
            border border-[rgba(0,0,0,0.29)]
            ${inputBgClass}
            ${inputRadiusClass}
          `}
        >
          {/* ICON */}
          <span
            className={`
              absolute
              left-[16px] top-[12px]
              lg:left-[24px] lg:top-[27.5px]
              transition
              ${isFooter ? 'opacity-100 brightness-100' : 'opacity-70'}
            `}
          >
            <Image
              src="/icons/mail.png"
              alt="Email"
              width={24}
              height={20}
              className="w-[23.8px] h-[19.5px] lg:w-[33px] lg:h-[26px]"
            />
          </span>

          {/* INPUT FIELD */}
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your work email to confirm your attendance"
            className="
              w-full h-full bg-transparent outline-none
              font-satoshi font-normal
              text-[13px] leading-[18px]
              lg:text-[20px] lg:leading-[27px]
              text-[rgba(0,0,0,0.7)]
              placeholder:text-[rgba(0,0,0,0.4)]
              pl-[58px] lg:pl-[80px] pr-[12px]
            "
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={isPending}
          className="
            w-[139px] h-[45px]
            lg:w-[251px] lg:h-[81px]
            rounded-[5px] lg:rounded-[8px]
            bg-[linear-gradient(90deg,rgba(245,171,64,0.9)_0%,#F5AB40_100%)]
            flex items-center justify-center
            font-satoshi font-bold
            text-[15px] leading-[20px]
            lg:text-[29px] lg:leading-[39px]
            text-white
            disabled:opacity-60
          "
        >
          RSVP Now
        </button>
      </div>

      {/* SUCCESS */}
      {success && (
        <div
          className="
            mt-[12px]
            px-[16px] py-[10px]
            rounded-[6px]
            bg-[#E6F6EA]
            border border-[#B6E2C1]
            text-[#1E7F4D]
            text-[13px] lg:text-[14px]
            font-satoshi font-medium
            flex items-center gap-[8px]
            animate-fade-in
            max-w-[400px]
          "
          role="alert"
        >
          <span className="text-[16px]">✅</span>
          <span>RSVP confirmed. We’ve saved your spot.</span>
        </div>
      )}

      {/* ERROR */}
      {error && (
        <p className="mt-[8px] text-[13px] text-red-600 font-medium">
          {error}
        </p>
      )}
    </form>
  );
};
