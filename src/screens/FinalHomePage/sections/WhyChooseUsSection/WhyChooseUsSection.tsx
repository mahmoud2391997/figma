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
    <section className="w-full py-16 md:py-24 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-[305px]">
      <div className="flex flex-col lg:flex-row items-start gap-12 md:gap-16 lg:gap-[73px]">
        <div className="flex flex-col items-start gap-8 md:gap-10 lg:gap-[42px] flex-1">
          <div className="flex flex-col items-start gap-4 md:gap-5 lg:gap-[17.5px]">
            <h2 className="w-full text-3xl md:text-4xl font-bold text-secondary-color tracking-tight leading-tight">
              Why We&apos;re the Right Fit for Your Digital Journey
            </h2>

            <p className="w-full text-base md:text-lg font-normal text-[#585b6f] leading-relaxed">
              We build scalable, intelligent ecommerce solutions powered by AI,
              automation, and modern tech to help global enterprises sell
              smarter, faster, and more efficiently.
            </p>
          </div>

          <img
            className="w-full h-auto rounded-[10px] object-cover"
            alt="Rectangle"
            src="/rectangle-40.png"
          />
        </div>

        <div className="flex flex-col items-start gap-4 md:gap-5 lg:gap-2.5 flex-1 w-full">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="w-full bg-[#fffffff7] rounded-[10px] border border-solid border-[#e5eaff]"
            >
              <CardContent className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 lg:gap-[30px] p-6 md:p-8 lg:px-[31px] lg:py-[30px]">
                <img
                  className="flex-shrink-0 w-8 h-8 md:w-auto"
                  alt="Frame"
                  src="/frame-71.svg"
                />

                <p className="flex-1 text-lg md:text-xl lg:text-[26px] font-bold text-secondary-color leading-snug lg:leading-[34px] whitespace-pre-line">
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
