import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const solutionCards = [
  {
    icon: "/frame-13-1.svg",
    title: "Multi-Vendor Marketplace",
    description:
      "Launch scalable marketplaces with vendor control & commission management.",
  },
  {
    icon: "/frame-13-3.svg",
    title: "Omnichannel Retail Solutions",
    description:
      "Seamlessly unify online and offline retail shopping experiences across platforms.",
  },
  {
    icon: "/frame-13-2.svg",
    title: "Customer Support Chatbots Solution",
    description:
      "Automated AI chat support for fast, reliable 24/7 customer service.",
  },
  {
    icon: "/frame-13.svg",
    title: "AI-Powered Marketplaces",
    description:
      "Deliver intelligent, automated, and personalized ecommerce experiences.",
  },
  {
    icon: "/frame-13-5.svg",
    title: "Seamless ERP & CRM Solutions",
    description: "Connect ecommerce with ERP and CRM for seamless operations.",
  },
];

export const SolutionsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#0a165e] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-[305px] py-16 md:py-24 lg:py-[120px]">
      <div className="flex flex-col items-center gap-8 md:gap-12 lg:gap-[25px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[25.5px] w-full">
          <div className="flex flex-col justify-center gap-2.5 p-2.5 rounded-[10px]">
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-[37px]">
              <div className="flex items-center gap-[7px]">
                <Badge className="h-auto bg-transparent border-0 p-0">
                  <img className="w-[47px] h-[13px]" alt="Frame" src="/frame-10.svg" />
                </Badge>
                <span className="font-semibold text-lg text-primary-color tracking-wide">
                  Solution
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight max-w-md">
                Solutions for Smarter Digital Commerce Growth
              </h2>
            </div>
          </div>

          {solutionCards.slice(0, 2).map((card, index) => (
            <Card
              key={index}
              className="bg-[#101c66] border-[#ffffff0f] rounded-[10px]"
            >
              <CardContent className="p-6 md:p-8 lg:p-[25px] lg:pt-[30px]">
                <div className="flex items-start gap-4 md:gap-6 lg:gap-[30px]">
                  <img className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12" alt="Frame" src={card.icon} />
                  <div className="flex flex-col gap-3 md:gap-4 lg:gap-[18.5px]">
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight max-w-xs">
                      {card.title}
                    </h3>
                    <p className="text-base md:text-lg font-normal text-[#ffffff99] leading-relaxed max-w-xs">
                      {card.description}
                    </p>
                    <button className="flex items-center gap-1.5 text-left">
                      <span className="font-semibold text-base md:text-lg text-white tracking-wide">
                        Read More
                      </span>
                      <img
                        className="w-4 h-4 md:w-5 md:h-5"
                        alt="Arrow"
                        src="/component-11.svg"
                      />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[25.5px] w-full">
          {solutionCards.slice(2, 5).map((card, index) => (
            <Card
              key={index}
              className="bg-[#101c66] border-[#ffffff0f] rounded-[10px]"
            >
              <CardContent className="p-6 md:p-8 lg:p-[25px] lg:pt-[30px]">
                <div className="flex items-start gap-4 md:gap-6 lg:gap-[30px]">
                  <img className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12" alt="Frame" src={card.icon} />
                  <div className="flex flex-col gap-3 md:gap-4 lg:gap-[18.5px]">
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight max-w-xs">
                      {card.title}
                    </h3>
                    <p className="text-base md:text-lg font-normal text-[#ffffff99] leading-relaxed max-w-xs">
                      {card.description}
                    </p>
                    <button className="flex items-center gap-1.5 text-left">
                      <span className="font-semibold text-base md:text-lg text-white tracking-wide">
                        Read More
                      </span>
                      <img
                        className="w-4 h-4 md:w-5 md:h-5"
                        alt="Arrow"
                        src="/component-11.svg"
                      />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button className="h-auto flex items-center gap-2.5 px-6 py-4 md:px-7 md:py-5 rounded-[5px] bg-primary-gradient hover:opacity-90">
          <span className="font-semibold text-white text-base md:text-lg tracking-wide">
            Explore All Solutions
          </span>
          <img
            className="w-4 h-4 md:w-5 md:h-5"
            alt="Arrow"
            src="/component-11.svg"
          />
        </Button>
      </div>
    </section>
  );
};
