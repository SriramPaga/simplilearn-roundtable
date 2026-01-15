import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  icon: string;
};

export const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div
      className="
        /* === WIDTH & HEIGHT === */
        w-full                 /* allows shrink below 387px */
        max-w-[387px]          /* exact Figma mobile width */
        h-[151px]

        lg:max-w-[389px]       /* exact Figma desktop width */
        lg:h-[203px]

        /* === VISUAL === */
        bg-white
        rounded-[8px]
        shadow-[0px_4px_34px_rgba(0,0,0,0.15)]

        /* === PADDING (FIGMA) === */
        px-[16px]
        pt-[14px]

        lg:px-[21px]
        lg:pt-[24px]

        /* === LAYOUT === */
        flex
        flex-col
      "
    >
      {/* HEADER ROW */}
      <div className="flex items-center gap-[12px] lg:gap-[18px] mb-[12px]">
        {/* ICON */}
        <div
          className="
            w-[40px]
            h-[40px]
            lg:w-[48px]
            lg:h-[48px]
            flex-shrink-0
          "
        >
          <Image
            src={`/icons/${icon}.png`}
            alt={title}
            width={48}
            height={48}
          />
        </div>

        {/* TITLE */}
        <h3
          className="
            font-satoshi
            font-bold
            text-black
            text-[20px]
            leading-[30px]
            lg:text-[24px]
            lg:leading-[30px]
          "
        >
          {title}
        </h3>
      </div>

      {/* DESCRIPTION */}
      <p
        className="
          font-satoshi
          font-medium
          text-black

          text-[16px]
          leading-[30px]

          lg:text-[22px]
          lg:leading-[30px]
          mx-6
          /* Prevent accidental overflow */
          line-clamp-2   /* adjust to 3 if Figma allows */
        "
      >
        {description}
      </p>
    </div>
  );
};
