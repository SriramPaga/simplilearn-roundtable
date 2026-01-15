export const AgendaSection = () => {
  const agendaItems = [
    {
      title: 'Welcome & Opening',
      speaker: 'Sudipto Mitra, CRO Simplilearn',
      description: "Why capability-building is now a board-level issue and what's changing in the workforce landscape.",
      color: 'from-[#00D9FF] to-[#0A9FCF]'
    },
    {
      title: "Keynote: What Enterprise Leaders Are Seeing on the Ground",
      speaker: "Rob Lauber, Former CLO McDonald's",
      description: 'A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries.',
      color: 'from-[#0A1E42] to-[#0D2952]'
    },
    {
      title: 'Lunch & Executive Conversation',
      speaker: 'Industry Experts Invited',
      description: 'What large enterprise talent ecosystems are learning about capability-building at scale.',
      color: 'from-[#00D9FF] to-[#0A9FCF]'
    }
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
        w-[390px]
        h-[376px]
        bg-white
        rounded-[8px]
        p-8
        flex
        flex-col
      "
      style={{
        boxShadow: "0px 4px 34px 0px #00000026",
      }}
    >
      {/* Title */}
      <h3 className="text-[28px] font-bold leading-tight text-[#3B5BFF] mb-8">
        {item.title}
      </h3>

      {/* Speaker */}
      <p className="text-[18px] font-semibold text-black mb-6">
        {item.speaker}
      </p>

      {/* Description */}
      <p className="text-[18px] leading-[28px] text-black">
        {item.description}
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};
