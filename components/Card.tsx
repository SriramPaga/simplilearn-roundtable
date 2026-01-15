export type CardIcon =
  | 'history'
  | 'account'
  | 'analytics'
  | 'verifiedUser'
  | 'flowsheet'
  | 'rocket';

type CardProps = {
  title: string;
  description: string;
  icon: CardIcon;
};

import Image from 'next/image';

export const Card = ({ title, description, icon }: CardProps) => {
  return (
    <article
      className="
        w-full
        max-w-[387px]
        h-[151px]
        lg:max-w-[389px]
        lg:h-[203px]
        bg-white
        rounded-[8px]
        shadow-[0px_4px_34px_rgba(0,0,0,0.15)]
        px-[16px] pt-[14px]
        lg:px-[21px] lg:pt-[24px]
        flex flex-col
      "
    >
      {/* Header */}
      <div className="flex items-center gap-[12px] lg:gap-[18px] mb-[12px]">
        {/* Icon (decorative) */}
        <div className="w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] flex-shrink-0">
          <Image
            src={`/icons/${icon}.png`}
            alt=""
            aria-hidden
            width={48}
            height={48}
          />
        </div>

        {/* Title */}
        <h3
          className="
            font-satoshi
            font-bold
            text-black
            text-[20px] leading-[30px]
            lg:text-[24px] lg:leading-[30px]
          "
        >
          {title}
        </h3>
      </div>

      {/* Description */}
      <p
        className="
          font-satoshi
          font-medium
          text-black
          text-[16px] leading-[30px]
          lg:text-[22px] lg:leading-[30px]
          mx-6
          line-clamp-2
        "
      >
        {description}
      </p>
    </article>
  );
};
