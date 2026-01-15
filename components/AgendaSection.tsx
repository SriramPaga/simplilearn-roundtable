type AgendaItem = {
  id: string;
  title: React.ReactNode;
  speaker: string;
  description: string;
};

const AGENDA_ITEMS: AgendaItem[] = [
  {
    id: 'welcome',
    title: 'Welcome & Opening',
    speaker: 'Sudipto Mitra, CRO Simplilearn',
    description:
      "Why capability-building is now a board-level issue and what's changing in the workforce landscape.",
  },
  {
    id: 'keynote',
    title: (
      <>
        Keynote:
        <br />
        What Enterprise Leaders Are Seeing on the Ground
      </>
    ),
    speaker: "Rob Lauber, Former CLO McDonald's",
    description:
      'A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries.',
  },
  {
    id: 'lunch',
    title: 'Lunch & Executive Conversation',
    speaker: 'Industry Experts Invited',
    description:
      'What large enterprise talent ecosystems are learning about capability-building at scale.',
  },
];
const sectionPadding =
  'max-w-[1440px] mx-auto px-[20px] lg:px-[100px] py-[80px]';

const sectionHeading =
  'font-satoshi font-black text-[#1D4DF4] text-[32px] leading-[40px] lg:text-[46px] lg:leading-[56px]';

const cardBase =
  'bg-white rounded-[8px] shadow-[0px_4px_34px_rgba(0,0,0,0.15)] flex flex-col';

const cardTitle =
  'font-satoshi font-black text-[#1D4DF4] text-[19px] leading-[26px] lg:text-[24px] lg:leading-[32px]';

  export const AgendaSection = () => {
  return (
    <section className="bg-[#00FFFF]">
      <div className={sectionPadding}>
        {/* Heading */}
        <div className="mb-[64px]">
          <h2 className={sectionHeading}>Event Agenda</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[40px] gap-y-[40px] justify-items-center">
          {AGENDA_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`
                ${cardBase}
                w-[387px] h-[256px]
                lg:w-[390px] lg:h-[376px]
                px-[22px] pt-[19px]
              `}
            >
              {/* Title */}
              <h3 className={`${cardTitle} h-[46px] lg:h-[126px] mt-4`}>
                {item.title}
              </h3>

              <div className="h-[24px]" />

              {/* Speaker */}
              <p className="font-satoshi font-bold text-black text-[15px] leading-[30px] lg:text-[20px]">
                {item.speaker}
              </p>

              <div className="h-[24px]" />

              {/* Description */}
              <p className="font-satoshi font-medium text-black text-[15px] leading-[30px] lg:text-[20px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
