import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const servicesData = [
  {
    icon: "/frame-13-4.svg",
    title: "AI/ML for Ecommerce",
    description:
      "Smart search, chatbots, and recommendations to personalize every experience.",
  },
  {
    icon: "/frame-61.svg",
    title: "Ecommerce Development Services",
    description:
      "End-to-end web development for secure, scalable, and growth-ready stores.",
  },
  {
    icon: "/frame-13-6.svg",
    title: "Mobile Commerce Services",
    description:
      "Fast, intuitive apps and PWAs built for cross-device shopping.",
  },
  {
    icon: "/frame-13-7.svg",
    title: "UI/UX Design Services",
    description:
      "Design seamless user journeys that build trust and maximize conversions.",
  },
  {
    icon: "/frame-13-8.svg",
    title: "Offshore Development Services",
    description:
      "Dedicated, cost-effective teams to scale projects with flexibility.",
  },
];

export const OurServicesSection = (): JSX.Element => {
  return (
    <section className="w-full relative bg-[#f5f6f7] py-[120px] px-4 md:px-8 lg:px-[305px]">
      <div className="flex flex-col items-center gap-[25px] relative">
        <div className="flex flex-col items-center gap-2.5 mb-6">
          <div className="flex items-center gap-[7px]">
            <img className="w-[47px] h-[13px]" alt="Frame" />
            <div className="font-top-titel font-[number:var(--top-titel-font-weight)] text-transparent text-[length:var(--top-titel-font-size)] tracking-[var(--top-titel-letter-spacing)] leading-[var(--top-titel-line-height)] [font-style:var(--top-titel-font-style)]">
              Our Services
            </div>
          </div>
          <h2 className="font-titel font-[number:var(--titel-font-weight)] text-secondary-color text-[length:var(--titel-font-size)] tracking-[var(--titel-letter-spacing)] leading-[var(--titel-line-height)] [font-style:var(--titel-font-style)] text-center">
            Services That Power <br />
            Smarter Commerce
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25.5px] w-full max-w-[1310px]">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              className="bg-white rounded-[10px] border border-solid border-[#e5eaff]"
            >
              <CardContent className="p-[25px] pt-[30px]">
                <div className="flex items-start gap-[30px]">
                  <img
                    className="flex-shrink-0 w-[65px]"
                    alt={service.title}
                    src={service.icon}
                  />
                  <div className="flex flex-col gap-[18.5px] flex-1">
                    <h3 className="font-[number:var(--box-font-weight)] text-secondary-color text-[length:var(--box-font-size)] leading-[var(--box-line-height)] font-box tracking-[var(--box-letter-spacing)] [font-style:var(--box-font-style)]">
                      {service.title}
                    </h3>
                    <p className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#585b6f] text-[17px] tracking-[0] leading-[27px]">
                      {service.description}
                    </p>
                    <button className="flex items-center gap-1.5 text-left group">
                      <span className="[font-family:'Space_Grotesk',Helvetica] font-semibold text-secondary-color text-[17px] tracking-[0] leading-[27px]">
                        Read More
                      </span>
                      <ArrowRightIcon className="w-[18px] h-[18px] text-secondary-color" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button className="h-auto flex items-center gap-2.5 px-[28.5px] py-[19px] rounded-[5px] bg-[linear-gradient(180deg,rgba(43,77,255,1)_0%,rgba(3,73,239,1)_100%)] hover:opacity-90 transition-opacity">
          <span className="[font-family:'Souliyo_Unicode-Regular',Helvetica] font-normal text-white text-[17px] tracking-[0] leading-[normal]">
            Explore All Services
          </span>
          <ArrowRightIcon className="w-[18px] h-[18px] text-white" />
        </Button>
      </div>

      <img
        className="absolute left-0 bottom-0 w-60 h-[345px] object-cover"
        alt="Shape"
        src="/shape002-1.png"
      />
    </section>
  );
};
