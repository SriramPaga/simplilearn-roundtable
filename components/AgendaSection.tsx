export const AgendaSection = () => {
  const agendaItems = [
    {
      title: "Welcome & Opening",
      speaker: "Sudipto Mitra, CRO Simplilearn",
      description:
        "Why capability-building is now a board-level issue and what's changing in the workforce landscape.",
      color: "from-[#00D9FF] to-[#0A9FCF]",
    },
    {
      title: (
        <>
          Keynote:
          <br />
          What Enterprise Leaders Are Seeing on the Ground
        </>
      ),
      speaker: "Rob Lauber, Former CLO McDonald's",
      description:
        "A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries.",
      color: "from-[#0A1E42] to-[#0D2952]",
    },
    {
      title: "Lunch & Executive Conversation",
      speaker: "Industry Experts Invited",
      description:
        "What large enterprise talent ecosystems are learning about capability-building at scale.",
      color: "from-[#00D9FF] to-[#0A9FCF]",
    },
  ];

  return (
    <section className="py-20 bg-[#00FFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D4DF4] mb-6">
            Event Agenda
          </h2>
        </div>

        <div
          className="
    grid
    grid-cols-1
    md:grid-cols-3
    gap-x-10
    gap-y-10
    justify-items-center
  "
        >
          {agendaItems.map((item, index) => (
            <div
              key={index}
              className="
    w-[387px]
    h-[256px]
    lg:w-[390px]
    lg:h-[376px]

    bg-white
    rounded-[8px]
    shadow-[0px_4px_34px_rgba(0,0,0,0.15)]

    px-[22px]
    pt-[19px]

    flex
    flex-col
  "
            >
              {/* TITLE — fixed height */}
              <h3
                className="
      font-satoshi
      font-black
      text-[#1D4DF4]

      text-[19px]
      leading-[26px]
      lg:text-[24px]
      lg:leading-[32px]

      h-[46px]
      lg:h-[126px]
      mt-4
    "
              >
                {item.title}
              </h3>

              {/* spacing exactly like Figma */}
              <div className="h-[24px]" />

              {/* SPEAKER */}
              <p
                className="
      font-satoshi
      font-bold
      text-black

      text-[15px]
      leading-[30px]
      lg:text-[20px]
    "
              >
                {item.speaker}
              </p>

              {/* spacing */}
              <div className="h-[24px]" />

              {/* DESCRIPTION */}
              <p
                className="
      font-satoshi
      font-medium
      text-black

      text-[15px]
      leading-[30px]
      lg:text-[20px]
    "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
