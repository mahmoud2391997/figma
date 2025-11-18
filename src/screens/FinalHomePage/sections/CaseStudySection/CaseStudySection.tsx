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
    <section className="flex flex-col w-full items-center justify-center gap-8 md:gap-12 py-16 md:py-24 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-[305px]">
      <header className="inline-flex flex-col items-center gap-2.5 text-center pb-8 md:pb-10">
        <div className="inline-flex items-center gap-[7px]">
          <img
            className="w-[47px] h-[13px]"
            alt="Decorative line"
            src="/frame-10.svg"
          />

          <h3 className="text-lg font-semibold text-primary-color tracking-wide">
            Case Study
          </h3>

          <img
            className="w-[47px] h-[13px]"
            alt="Decorative line"
            src="/frame-7.svg"
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-secondary-color tracking-tight leading-tight max-w-xl">
          Proven Ecommerce Partnerships That Deliver
        </h2>
      </header>

      <div className="inline-flex flex-col items-center justify-center gap-8 md:gap-10 w-full">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 md:gap-[30px] w-full">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="flex flex-col items-center justify-center bg-[#086ad80d] rounded-[10px] overflow-hidden border border-solid border-[#086ad81a] w-full lg:flex-1"
            >
              <CardContent className="p-0 w-full h-full flex flex-col">
                <div
                  className="flex flex-col items-start justify-center gap-2.5 px-6 py-20 md:px-8 lg:px-[30px] lg:py-[100px] bg-cover bg-center bg-no-repeat w-full flex-grow"
                  style={{ backgroundImage: `url(${study.backgroundImage})` }}
                >
                  <div className="w-full max-w-[580px] text-white text-xl md:text-2xl font-bold leading-normal">
                    {study.subtitle}
                  </div>
                </div>

                <div className="inline-flex flex-col items-start gap-4 p-6 md:p-8 lg:p-[30px] w-full bg-white">
                  <h4 className="w-full max-w-[580px] text-secondary-color text-xl md:text-2xl lg:text-[26px] font-bold leading-normal mb-2">
                    {study.title}
                  </h4>

                  <Button className="inline-flex items-center justify-center gap-2.5 px-6 py-4 md:px-[29px] md:py-[19px] h-auto rounded-[5px] bg-primary-gradient hover:opacity-90">
                    <span className="font-medium text-white text-base md:text-[17px] leading-normal">
                      Read More
                    </span>
                    <ArrowRightIcon className="w-[18px] h-[18px]" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button className="inline-flex items-center justify-center gap-2.5 px-7 py-5 h-auto rounded-[5px] bg-primary-gradient hover:opacity-90">
          <span className="font-medium text-white text-lg leading-normal">
            View All Case Study
          </span>
          <ArrowRightIcon className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};
