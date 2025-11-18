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
    <section className="flex flex-col w-full items-start gap-2.5 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-[305px] py-16 md:py-24 lg:py-[120px] relative">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[34px] relative w-full">
        <div className="relative w-full lg:w-[661px] h-auto lg:h-[526px]">
          <div className="relative w-full max-w-[500px] mx-auto lg:mx-0 lg:absolute lg:top-0 lg:left-[54px]">
            <img
              className="w-full h-auto rounded-[30px] object-cover"
              alt="About us main"
              src="/rectangle-47.png"
            />
            <img
              className="absolute top-[10%] right-[5%] w-[45%] h-auto rounded-[30px] border-[7px] border-solid border-[#ffffff] object-cover"
              alt="About us secondary"
              src="/rectangle-48.png"
            />
          </div>

          <Card className="relative lg:absolute lg:top-[329px] lg:left-0 w-full max-w-[276px] mt-8 lg:mt-0 mx-auto lg:mx-0 h-auto bg-white rounded-[5px] overflow-hidden shadow-[0px_0px_30px_#0000000f]">
            <CardContent className="p-[15px] relative">
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

              <TrendingUpIcon className="absolute top-[15px] right-[15px] w-[60px] h-[60px] text-primary-color" />
            </CardContent>
          </Card>
        </div>

        <div className="inline-flex flex-col items-start gap-[30px] relative w-full lg:w-auto">
          <div className="inline-flex flex-col items-start gap-[25px] relative w-full">
            <div className="inline-flex flex-col items-start gap-[17.5px] relative w-full">
              <h2 className="w-full lg:w-[600px] mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-bold text-secondary-color text-3xl md:text-4xl lg:text-[42px] tracking-[-0.74px] leading-tight lg:leading-[50px]">
                Your AI-First Ecommerce Development &amp; Digital Transformation
                Partner
              </h2>

              <p className="w-full lg:w-[615px] [font-family:'Space_Grotesk',Helvetica] font-normal text-[#585b6f] text-base md:text-[17px] tracking-[0] leading-relaxed lg:leading-[27px]">
                At nopAccelerate, we build enterprise ecommerce development
                solutions, combining custom websites, mobile apps, UI/UX design,
                and AI-powered features to deliver secure, scalable, and
                future-ready commerce.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-[55px] relative w-full">
              <div className="inline-flex flex-col items-start gap-[8.5px] relative">
                {features.slice(0, 3).map((feature, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-[15px] relative"
                  >
                    <CheckIcon className="w-[18px] h-[18px] text-primary-color flex-shrink-0" />

                    <div className="[font-family:'Space_Grotesk',Helvetica] font-medium text-[#0a165e] text-[17px] tracking-[0] leading-[27px] whitespace-nowrap">
                      {feature.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="inline-flex flex-col items-start gap-[8.5px] relative">
                {features.slice(3, 6).map((feature, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-[15px] relative"
                  >
                    <CheckIcon className="w-[18px] h-[18px] text-primary-color flex-shrink-0" />

                    <div className="[font-family:'Space_Grotesk',Helvetica] font-medium text-[#0a165e] text-[17px] tracking-[0] leading-[27px] whitespace-nowrap">
                      {feature.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-[518px] h-px bg-[#2b4dff1a]" />

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-[30px] relative w-full">
            <Button className="inline-flex items-center justify-center gap-2.5 px-[28.5px] py-[19px] h-auto rounded-[5px] bg-[linear-gradient(180deg,rgba(43,77,255,1)_0%,rgba(3,73,239,1)_100%)]">
              <span className="[font-family:'Space_Grotesk',Helvetica] font-semibold text-white text-[17px] tracking-[0] leading-[normal] whitespace-nowrap">
                Discover More
              </span>

              <ArrowRightIcon className="w-[18px] h-[18px]" />
            </Button>

            <div className="inline-flex items-center gap-[15px] relative">
              <MailIcon className="w-[56px] h-[56px] text-primary-color" />

              <div className="inline-flex flex-col items-start relative">
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
        className="hidden lg:block absolute top-[297px] right-0 w-[116px] h-[173px] object-cover"
        alt="Decorative element"
        src="/mask-group-1.png"
      />
    </section>
  );
};
