import {
  ArrowRightIcon,
  CheckIcon,
  MailIcon,
  TrendingUpIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  { text: "Certified Experts" },
  { text: "Custom Solutions" },
  { text: "Complete Services" },
  { text: "Growth Partner" },
  { text: "Smart Automation" },
  { text: "Next-Gen Development" },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-2.5 px-[305px] py-[120px] relative">
      <div className="inline-flex items-center gap-[34px] relative flex-[0_0_auto]">
        <div className="relative w-[661px] h-[526px]">
          <img
            className="absolute top-0 left-[54px] w-[500px] h-[526px] rounded-[30px] object-cover"
            alt="About us main"
            src="/rectangle-47.png"
          />

          <img
            className="absolute top-[25px] left-[394px] w-[277px] h-[294px] rounded-[30px] border-[7px] border-solid border-[#ffffff] object-cover"
            alt="About us secondary"
            src="/rectangle-48.png"
          />

          <Card className="absolute top-[329px] left-0 w-[276px] h-[162px] bg-white rounded-[5px] overflow-hidden shadow-[0px_0px_30px_#0000000f]">
            <CardContent className="p-[15px]">
              <div className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#585b6f] text-base tracking-[0] leading-[31px] whitespace-nowrap">
                Total Clients
              </div>

              <div className="[font-family:'Space_Grotesk',Helvetica] font-bold text-primary-color text-[28px] tracking-[0] leading-[normal]">
                200k+
              </div>

              <div className="inline-flex items-center gap-[15px] mt-[29px]">
                <TrendingUpIcon className="w-[18px] h-[18px] text-green-500" />

                <div className="[font-family:'Space_Grotesk',Helvetica] font-medium text-[#585b6f] text-base tracking-[-0.80px] leading-[26px] whitespace-nowrap">
                  1.3% Up from past week
                </div>
              </div>

              <img
                className="absolute top-[15px] right-[15px] w-[60px] h-[60px]"
                alt="Client icon"
                src="/frame-16.svg"
              />
            </CardContent>
          </Card>
        </div>

        <div className="inline-flex flex-col items-start gap-[30px] relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-[25px] relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-[17.5px] relative flex-[0_0_auto]">
              <h2 className="w-[600px] h-[182px] mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-bold text-secondary-color text-[42px] tracking-[-0.74px] leading-[50px]">
                Your AI-First Ecommerce Development &amp; Digital Transformation
                Partner
              </h2>

              <p className="w-[615px] h-[81px] [font-family:'Space_Grotesk',Helvetica] font-normal text-[#585b6f] text-[17px] tracking-[0] leading-[27px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                At nopAccelerate, we build enterprise ecommerce development
                solutions, combining custom websites, mobile apps, UI/UX design,
                and AI-powered features to deliver secure, scalable, and
                future-ready commerce.
              </p>
            </div>

            <div className="inline-flex items-center gap-[55px] relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-[8.5px] relative flex-[0_0_auto]">
                {features.slice(0, 3).map((feature, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]"
                  >
                    <CheckIcon className="w-[18px] h-[18px] text-primary-color" />

                    <div className="w-[213px] h-[27px] mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-medium text-[#0a165e] text-[17px] tracking-[0] leading-[27px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                      {feature.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="inline-flex flex-col items-start gap-[8.5px] relative flex-[0_0_auto]">
                {features.slice(3, 6).map((feature, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]"
                  >
                    <CheckIcon className="w-[18px] h-[18px] text-primary-color" />

                    <div className="w-[213px] h-[27px] mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-medium text-[#0a165e] text-[17px] tracking-[0] leading-[27px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                      {feature.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-[518px] h-px bg-[#2b4dff1a]" />

          <div className="inline-flex items-center gap-[30px] relative flex-[0_0_auto]">
            <Button className="inline-flex items-center justify-center gap-2.5 px-[28.5px] py-[19px] h-auto rounded-[5px] bg-[linear-gradient(180deg,rgba(43,77,255,1)_0%,rgba(3,73,239,1)_100%)]">
              <span className="[font-family:'Space_Grotesk',Helvetica] font-semibold text-white text-[17px] tracking-[0] leading-[normal] whitespace-nowrap">
                Discover More
              </span>

              <ArrowRightIcon className="w-[18px] h-[18px]" />
            </Button>

            <div className="inline-flex items-start gap-[15px] relative flex-[0_0_auto]">
              <MailIcon className="w-[56px] h-[56px] text-primary-color" />

              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#585b6f] text-sm tracking-[0] leading-7 whitespace-nowrap">
                  Email Us Now
                </div>

                <div className="[font-family:'Poppins',Helvetica] font-normal text-secondary-color text-xl tracking-[0] leading-[27px] whitespace-nowrap">
                  sales@nopaccelerate.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute top-[297px] right-0 w-[116px] h-[173px] object-cover"
        alt="Decorative element"
        src="/mask-group-1.png"
      />
    </section>
  );
};
