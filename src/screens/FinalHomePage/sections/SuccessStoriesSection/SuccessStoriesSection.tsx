import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const statsLeft = [
  { value: "12+", label: "Years Experience" },
  { value: "1000+", label: "Projects Delivered" },
  { value: "200+", label: "Custom Solutions" },
];

const statsRight = [
  { value: "11+", label: "Countries Served" },
  { value: "100%", label: "Secure Codebase" },
  { value: "99%", label: "Client Satisfaction" },
];

export const SuccessStoriesSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#0a165e] py-16 md:py-24 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-4">
      <div className="max-w-[1310px] mx-auto flex flex-col items-center gap-12 md:gap-16 lg:gap-[62px]">
        <div className="flex flex-col lg:flex-row items-start gap-12 md:gap-16 lg:gap-[70px] w-full">
          <div className="flex flex-col items-start justify-center gap-6 md:gap-8 lg:gap-[26px] relative flex-1">
            <h2 className="relative w-full text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Success Stories Backed by Global Ecommerce Expertise
            </h2>

            <p className="relative w-full text-base md:text-lg font-normal text-[#ffffff99] leading-relaxed">
              nopAccelerate empowers enterprises and retailers worldwide with
              AI-driven ecommerce solutions designed for scale, security, and
              measurable growth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch gap-6 md:gap-8 lg:gap-10 w-full lg:w-auto">
            <Card className="flex-1 rounded-[10px] border-0 [background:url(/frame-75.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(16,28,102,1)_0%,rgba(16,28,102,1)_100%)]">
              <CardContent className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-[30px] p-8 md:p-10 lg:px-[43px] lg:py-[52px] h-full">
                {statsLeft.map((stat, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center gap-3 md:gap-4 lg:gap-[18px]">
                      <div className="font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight">
                        {stat.value}
                      </div>
                      <div className="font-semibold text-white text-base md:text-lg text-center tracking-wide leading-tight">
                        {stat.label}
                      </div>
                    </div>
                    {index < statsLeft.length - 1 && (
                      <Separator className="w-full max-w-[214px] h-px bg-white/20" />
                    )}
                  </React.Fragment>
                ))}
              </CardContent>
            </Card>

            <Card className="flex-1 rounded-[10px] border-0 [background:url(/frame-75.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(16,28,102,1)_0%,rgba(16,28,102,1)_100%)]">
              <CardContent className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-[30px] p-8 md:p-10 lg:px-[43px] lg:py-[52px] h-full">
                {statsRight.map((stat, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center gap-3 md:gap-4 lg:gap-[18px]">
                      <div className="font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight">
                        {stat.value}
                      </div>
                      <div className="font-semibold text-white text-base md:text-lg text-center tracking-wide leading-tight">
                        {stat.label}
                      </div>
                    </div>
                    {index < statsRight.length - 1 && (
                      <Separator className="w-full max-w-[214px] h-px bg-white/20" />
                    )}
                  </React.Fragment>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        <Button className="h-auto flex items-center justify-center gap-2.5 px-7 py-5 rounded-[5px] bg-primary-gradient hover:opacity-90 transition-opacity">
          <span className="font-medium text-white text-lg leading-normal">
            Talk to Our Experts
          </span>
          <img
            className="w-5 h-5"
            alt="Arrow"
            src="/component-11.svg"
          />
        </Button>
      </div>

      <div className="max-w-[1498px] mx-auto mt-16 md:mt-24 lg:mt-[120px] px-4">
        <Card className="bg-[#f5f6f7] rounded-[15px] border border-solid border-[#3672ff21]">
          <CardContent className="flex flex-col items-center gap-6 md:gap-8 lg:gap-[22px] p-8 md:p-12 lg:px-[61px] lg:py-[50px]">
            <div className="flex flex-col items-center gap-2.5 w-full text-center">
              <div className="flex flex-col items-center gap-2.5 py-2.5">
                <div className="flex items-center gap-[7px]">
                  <img
                    className="w-[47px] h-[13px]"
                    alt="Decorative line"
                    src="/frame-10.svg"
                  />
                  <div className="text-lg font-semibold text-primary-color tracking-wide">
                    Our Technologies
                  </div>
                  <img
                    className="w-[47px] h-[13px]"
                    alt="Decorative line"
                    src="/frame-7.svg"
                  />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-secondary-color tracking-tight leading-tight">
                  Technologies and Platforms We Work On
                </h3>
              </div>
            </div>

            <img
              className="w-full"
              alt="Technology logos"
              src="/frame-94.svg"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
