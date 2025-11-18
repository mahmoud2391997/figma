import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const caseStudies = [
  {
    backgroundImage: "/frame-235.png",
    title: "30% Sales growth after using nopAccelerate Plus Pro Search",
    subtitle: "Why Wholesale E - Stores Should Make Sell",
  },
  {
    backgroundImage: "/frame-235-1.png",
    title: "POSPAK.COM – Enhancing Website Performance and User Experience",
    subtitle: "Why Wholesale E - Stores Should Make Sell",
  },
];

export const CaseStudySection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-5 py-[120px] px-4 md:px-8 lg:px-[305px]">
      <header className="inline-flex flex-col items-center gap-2.5 pb-[25px]">
        <div className="inline-flex items-center gap-[7px]">
          <img
            className="w-[47px] h-[13px]"
            alt="Decorative line"
            src="/frame-10.svg"
          />

          <h3 className="font-top-titel font-[number:var(--top-titel-font-weight)] text-primary-color text-[length:var(--top-titel-font-size)] tracking-[var(--top-titel-letter-spacing)] leading-[var(--top-titel-line-height)] whitespace-nowrap [font-style:var(--top-titel-font-style)]">
            Case Study
          </h3>

          <img
            className="w-[47px] h-[13px]"
            alt="Decorative line"
            src="/frame-7.svg"
          />
        </div>

        <h2 className="font-titel font-[number:var(--titel-font-weight)] text-secondary-color text-[length:var(--titel-font-size)] tracking-[var(--titel-letter-spacing)] leading-[var(--titel-line-height)] whitespace-nowrap [font-style:var(--titel-font-style)]">
          Proven Ecommerce Partnerships That Deliver
        </h2>
      </header>

      <div className="inline-flex flex-col items-center justify-center gap-5 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-[30px] pb-10 w-full">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="flex flex-col items-center justify-center bg-[#086ad80d] rounded-[10px] overflow-hidden border border-solid border-[#086ad81a] w-full lg:w-auto"
            >
              <CardContent className="p-0 w-full">
                <div
                  className="flex flex-col items-start gap-2.5 px-[30px] py-[164.5px] bg-cover bg-center bg-no-repeat w-full"
                  style={{ backgroundImage: `url(${study.backgroundImage})` }}
                >
                  <div className="w-full max-w-[580px] [font-family:'Space_Grotesk',Helvetica] font-bold text-transparent text-2xl tracking-[0] leading-[34px]">
                    {study.subtitle}
                  </div>
                </div>

                <div className="inline-flex flex-col items-start gap-[1.33px] p-[30px] w-full">
                  <h4 className="w-full max-w-[580px] [font-family:'Space_Grotesk',Helvetica] font-bold text-secondary-color text-[26px] tracking-[-0.13px] leading-[normal] mb-4">
                    {study.title}
                  </h4>

                  <Button className="inline-flex items-center justify-center gap-2.5 px-[29px] py-[19px] h-auto rounded-[5px] bg-[linear-gradient(180deg,rgba(43,77,255,1)_0%,rgba(3,73,239,1)_100%)] hover:opacity-90">
                    <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-[17px] tracking-[0] leading-[normal]">
                      Read More
                    </span>
                    <ArrowRightIcon className="w-[18px] h-[18px]" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button className="inline-flex items-center justify-center gap-2.5 px-[29px] py-[19px] h-auto rounded-[5px] bg-[linear-gradient(180deg,rgba(43,77,255,1)_0%,rgba(3,73,239,1)_100%)] hover:opacity-90">
          <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-[17px] tracking-[0] leading-[normal]">
            View All Case Study
          </span>
          <ArrowRightIcon className="w-[18px] h-[18px]" />
        </Button>
      </div>
    </section>
  );
};
