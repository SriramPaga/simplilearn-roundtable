import Image from "next/image";

export const SpeakersSection = () => {
  const speakers = [
    {
      name: "Rob Lauber",
      image: "/images/rob-lauber.jpg",
      bio: "Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald’s, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI.",
    },
    {
      name: "Krishna Kumar",
      image: "/images/krishna-kumar.jpg",
      bio: "Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries. Through direct engagement with enterprise leaders and education partners, he sees what scales, and what doesn’t, in building workforce readiness for the AI era, offering a cross-enterprise view of the priorities shaping workforce strategy today.",
    },
    {
      name: "Sudipto Mitra",
      image: "/images/sudipto-mitra.jpg",
      bio: "Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent. As Chief Revenue Officer at Simplilearn, he works with executive teams to address workforce capability gaps as AI reshapes roles and operating models. He previously held leadership roles at Accenture, IBM Consulting, and WorkFusion.",
    },
  ];

  return (
    <section className="bg-[linear-gradient(180deg,#1D4DF4_0%,#112D8E_100%)]">
      <div className="max-w-[1440px] mx-auto px-[20px] lg:px-[100px] pt-[44px] pb-[88px]">
        {/* Section Title */}
        <h2
          className="
            text-[#F5AB40]
            font-satoshi font-black
            text-[24px] leading-[32px]
            lg:text-[40px] lg:leading-[54px]
            mb-[40px] lg:mb-[56px]
          "
        >
          Featured Speakers
        </h2>

        {/* Speakers */}
        <div className="space-y-[64px] lg:space-y-[72px]">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="
                flex flex-col
                lg:flex-row
                items-center
                lg:items-start
                gap-[24px]
                lg:gap-[48px]
              "
            >
              {/* Image */}
              <div
                className="
                  relative
                  w-[192px] h-[183px]
                  lg:w-[340px] lg:h-[325px]
                  bg-[#25286A]
                  rounded-[8px]
                  overflow-hidden
                  flex-shrink-0
                "
              >
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div
                className="
                  w-full
                  max-w-[389px]
                  lg:max-w-[821px]
                  text-center
                  lg:text-left
                "
              >
                <h3
                  className="
                    font-satoshi font-black
                    text-[#00FFFF]
                    text-[22px] leading-[30px]
                    lg:text-[30px] lg:leading-[41px]
                    mb-[8px] lg:mb-[12px]
                  "
                >
                  {speaker.name}
                </h3>

                <p
                  className="
                    font-satoshi font-medium
                    text-white
                    text-[15px] leading-[25px]
                    lg:text-[24px] lg:leading-[35px]
                  "
                >
                  {speaker.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Expert Perspectives Card */}
        <div
          className="
            mt-[64px] lg:mt-[72px]
            mx-auto
            w-[389px] h-[195px]
            lg:w-[1278px] lg:h-[224px]
            bg-[url('/images/speakerSection.png')]
            bg-cover bg-center
            rounded-[8px]
            px-[24px] lg:px-[88px]
            py-[24px]
            flex flex-col justify-center
            text-center lg:text-left
          "
        >
          <h3
            className="
              font-satoshi font-black
              text-[#00FFFF]
              text-[20px] leading-[27px]
              lg:text-[30px] lg:leading-[41px]
              mb-[8px]
            "
          >
            Additional Expert Perspectives
          </h3>

          <p
            className="
              font-satoshi font-medium
              text-white
              text-[15px] leading-[25px]
              lg:text-[24px] lg:leading-[35px]
              max-w-[346px] lg:max-w-[1078px]
              mx-auto lg:mx-0
            "
          >
            Invited experts from leading consulting and enterprise learning
            organizations will contribute short perspectives, offering insight
            into how large organizations are evolving skills and leadership
            models in the AI era.
          </p>
        </div>
      </div>
    </section>
  );
};