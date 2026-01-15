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
        w-[387px]
        h-[151px]
        lg:w-[389px]
        lg:h-[203px]

        bg-white
        rounded-[8px]
        shadow-[0px_4px_34px_rgba(0,0,0,0.15)]

        px-[16px]
        pt-[14px]
        lg:px-[21px]
        lg:pt-[24px]

        flex
        flex-col
      "
    >
      {/* Header row */}
      <div className="flex items-center gap-[12px] lg:gap-[18px] mb-[12px]">
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

      {/* Description */}
      <p
        className="
          font-satoshi
          font-medium
          text-black

          text-[16px]
          leading-[30px]

          lg:text-[22px]
          lg:leading-[30px]
        "
      >
        {description}
      </p>
    </div>
  );
};
