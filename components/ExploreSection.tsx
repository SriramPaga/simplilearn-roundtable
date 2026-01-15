import { Card } from "./Card";

export const ExploreSection = () => {
  const topics = [
    {
      title: "Skills Decay",
      description: "every 2–3 years faster for technical skills",
      icon: "history",
    },
    {
      title: "Manager Role Shift",
      description: "orchestrating people + AI agents",
      icon: "account_tree",
    },
    {
      title: "Leaders + AI Co-Pilots",
      description: "requires sensemaking and systems thinking",
      icon: "analytics",
    },
    {
      title: "Frontline Capability",
      description: "now depends on digital fluency",
      icon: "verified_user",
    },
    {
      title: "Core Human Capabilities",
      description: "analytical reasoning and scenario planning",
      icon: "flowsheet",
    },
    {
      title: "Winning Organizations",
      description: "predict skills ahead of demand",
      icon: "rocket_launch",
    },
  ];

  return (
    <section
      className="
        w-full
        bg-[rgba(210,225,255,0.5)]
      "
    >
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-[20px]
          lg:px-[104px]
          pt-[48px]
          lg:pt-[44px]
          pb-[64px]
          lg:pb-[72px]
        "
      >
        {/* Heading */}
        <h2
          className="
            font-satoshi
            font-black
            text-[#F5AB40]
            text-[24px]
            leading-[32px]
            lg:text-[40px]
            lg:leading-[54px]
            mb-[12px]
          "
        >
          What We’ll Explore
        </h2>

        {/* Subheading */}
        <p
          className="
            font-satoshi
            font-medium
            text-black
            text-[15px]
            leading-[27px]
            lg:text-[25px]
            lg:leading-[34px]
            mb-[32px]
            lg:mb-[60px]
          "
        >
          The critical shifts every enterprise must plan for:
        </p>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-y-[24px]
            lg:gap-y-[23px]
            gap-x-[34px]
          "
        >
          {topics.map((topic, index) => (
            <Card
              key={index}
              title={topic.title}
              description={topic.description}
              icon={topic.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
