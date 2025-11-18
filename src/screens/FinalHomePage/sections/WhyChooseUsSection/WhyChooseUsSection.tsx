import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  {
    text: "Proven experience in global ecommerce markets",
  },
  {
    text: "Certified experts in ecommerce technologies",
  },
  {
    text: "Future-ready stack and scalable architecture",
  },
  {
    text: "Competitive pricing and full IP ownership",
  },
  {
    text: "End-to-end eCommerce services \n(Design → Development → Support)",
  },
];

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section className="w-full py-[120px] px-4 md:px-8 lg:px-[305px]">
      <div className="flex flex-col lg:flex-row items-start lg:items-end gap-[73px]">
        <div className="flex flex-col items-start gap-[42px] flex-1">
          <div className="flex flex-col items-start gap-[17.5px]">
            <h2 className="w-full max-w-[609px] font-titel font-[number:var(--titel-font-weight)] text-secondary-color text-[length:var(--titel-font-size)] tracking-[var(--titel-letter-spacing)] leading-[var(--titel-line-height)] [font-style:var(--titel-font-style)]">
              Why We&apos;re the Right Fit for Your Digital Journey
            </h2>

            <p className="w-full max-w-[615px] [font-family:'Space_Grotesk',Helvetica] font-normal text-[#585b6f] text-[17px] tracking-[0] leading-[27px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
              We build scalable, intelligent ecommerce solutions powered by AI,
              automation, and modern tech to help global enterprises sell
              smarter, faster, and more efficiently.
            </p>
          </div>

          <img
            className="w-full h-[410px] rounded-[10px] object-cover"
            alt="Rectangle"
            src="/rectangle-40.png"
          />
        </div>

        <div className="flex flex-col items-start gap-2.5 flex-1">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="w-full bg-[#fffffff7] rounded-[10px] border border-solid border-[#e5eaff]"
            >
              <CardContent className="flex items-start gap-[30px] px-[31px] py-[30px]">
                <img
                  className="flex-shrink-0"
                  alt="Frame"
                  src="/frame-71.svg"
                />

                <p className="flex-1 [font-family:'Space_Grotesk',Helvetica] font-bold text-secondary-color text-[26px] tracking-[0] leading-[34px] whitespace-pre-line">
                  {feature.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
