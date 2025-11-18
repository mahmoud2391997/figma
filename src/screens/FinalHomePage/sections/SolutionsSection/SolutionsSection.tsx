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
    <section className="w-full bg-[#0a165e] px-4 py-[120px] lg:px-[305px]">
      <div className="flex flex-col items-center gap-[25px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25.5px] w-full">
          <div className="flex flex-col justify-center gap-2.5 p-2.5 rounded-[10px]">
            <div className="flex flex-col gap-[37px]">
              <div className="flex items-center gap-[7px]">
                <Badge className="h-auto bg-transparent border-0 p-0">
                  <img className="w-[47px] h-[13px]" alt="Frame" />
                </Badge>
                <span className="font-top-titel font-[number:var(--top-titel-font-weight)] text-transparent text-[length:var(--top-titel-font-size)] tracking-[var(--top-titel-letter-spacing)] leading-[var(--top-titel-line-height)] [font-style:var(--top-titel-font-style)]">
                  Solution
                </span>
              </div>
              <h2 className="font-titel font-[number:var(--titel-font-weight)] text-white text-[length:var(--titel-font-size)] tracking-[var(--titel-letter-spacing)] leading-[var(--titel-line-height)] [font-style:var(--titel-font-style)] max-w-[388px]">
                Solutions for Smarter Digital Commerce Growth
              </h2>
            </div>
          </div>

          {solutionCards.slice(0, 2).map((card, index) => (
            <Card
              key={index}
              className="bg-[#101c66] border-[#ffffff0f] rounded-[10px]"
            >
              <CardContent className="p-[25px] pt-[30px]">
                <div className="flex items-start gap-[30px]">
                  <img className="flex-shrink-0" alt="Frame" src={card.icon} />
                  <div className="flex flex-col gap-[18.5px]">
                    <h3 className="font-box font-[number:var(--box-font-weight)] text-white text-[length:var(--box-font-size)] tracking-[var(--box-letter-spacing)] leading-[var(--box-line-height)] [font-style:var(--box-font-style)] max-w-[268px]">
                      {card.title}
                    </h3>
                    <p className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#ffffff99] text-[17px] tracking-[0] leading-[27px] max-w-[268px]">
                      {card.description}
                    </p>
                    <button className="flex items-center gap-1.5 text-left">
                      <span className="font-semibold text-[17px] leading-[27px] [font-family:'Space_Grotesk',Helvetica] text-white tracking-[0]">
                        Read More
                      </span>
                      <img
                        className="w-[18px] h-[18px]"
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25.5px] w-full">
          {solutionCards.slice(2, 5).map((card, index) => (
            <Card
              key={index}
              className="bg-[#101c66] border-[#ffffff0f] rounded-[10px]"
            >
              <CardContent className="p-[25px] pt-[30px]">
                <div className="flex items-start gap-[30px]">
                  <img className="flex-shrink-0" alt="Frame" src={card.icon} />
                  <div className="flex flex-col gap-[18.5px]">
                    <h3 className="font-box font-[number:var(--box-font-weight)] text-white text-[length:var(--box-font-size)] tracking-[var(--box-letter-spacing)] leading-[var(--box-line-height)] [font-style:var(--box-font-style)] max-w-[268px]">
                      {card.title}
                    </h3>
                    <p className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#ffffff99] text-[17px] tracking-[0] leading-[27px] max-w-[268px]">
                      {card.description}
                    </p>
                    <button className="flex items-center gap-1.5 text-left">
                      <span className="font-semibold text-[17px] leading-[27px] [font-family:'Space_Grotesk',Helvetica] text-white tracking-[0]">
                        Read More
                      </span>
                      <img
                        className="w-[18px] h-[18px]"
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

        <Button className="h-auto flex items-center gap-2.5 px-[28.5px] py-[19px] rounded-[5px] bg-[linear-gradient(180deg,rgba(43,77,255,1)_0%,rgba(3,73,239,1)_100%)] hover:opacity-90">
          <span className="[font-family:'Souliyo_Unicode-Regular',Helvetica] font-normal text-white text-[17px] tracking-[0] leading-[normal]">
            Explore All Solutions
          </span>
          <img
            className="w-[18px] h-[18px]"
            alt="Arrow"
            src="/component-11.svg"
          />
        </Button>
      </div>
    </section>
  );
};
