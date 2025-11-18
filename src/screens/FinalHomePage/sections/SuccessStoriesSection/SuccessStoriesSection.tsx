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
    <section className="relative w-full bg-[#0a165e] py-[120px] px-4">
      <div className="max-w-[1310px] mx-auto flex flex-col items-center gap-[62px]">
        <div className="flex items-start gap-[70px] w-full flex-wrap lg:flex-nowrap">
          <div className="flex flex-col items-start justify-center gap-[26px] relative flex-1 min-w-[390px]">
            <img
              className="absolute top-[359px] left-[39px] w-[310px] h-[300px] object-cover pointer-events-none"
              alt="Shape"
              src="/shape-1-1.png"
            />

            <h2 className="relative w-full font-titel font-[number:var(--titel-font-weight)] text-white text-[length:var(--titel-font-size)] tracking-[var(--titel-letter-spacing)] leading-[var(--titel-line-height)] [font-style:var(--titel-font-style)]">
              Success Stories Backed by Global Ecommerce Expertise
            </h2>

            <p className="relative w-full max-w-[600px] [font-family:'Space_Grotesk',Helvetica] font-normal text-[#ffffff99] text-[17px] tracking-[0] leading-[23px]">
              nopAccelerate empowers enterprises and retailers worldwide with
              AI-driven ecommerce solutions designed for scale, security, and
              measurable growth.
            </p>
          </div>

          <div className="flex items-center gap-10 flex-wrap sm:flex-nowrap">
            <Card className="rounded-[10px] border-0 [background:url(/frame-75.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(16,28,102,1)_0%,rgba(16,28,102,1)_100%)]">
              <CardContent className="flex flex-col items-center justify-center gap-[30px] px-[43px] py-[52px]">
                {statsLeft.map((stat, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center gap-[18px]">
                      <div className="font-bold text-[50px] tracking-[-0.50px] leading-[64px] [font-family:'Space_Grotesk',Helvetica] text-white whitespace-nowrap">
                        {stat.value}
                      </div>
                      <div className="[font-family:'Space_Grotesk',Helvetica] font-semibold text-white text-lg text-center tracking-[0] leading-[18px] whitespace-nowrap">
                        {stat.label}
                      </div>
                    </div>
                    {index < statsLeft.length - 1 && (
                      <Separator className="w-[214px] h-px bg-white/20" />
                    )}
                  </React.Fragment>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-[10px] border-0 [background:url(/frame-75.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(16,28,102,1)_0%,rgba(16,28,102,1)_100%)]">
              <CardContent className="flex flex-col items-center justify-center gap-[30px] px-[43px] py-[52px]">
                {statsRight.map((stat, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center gap-[18px]">
                      <div className="font-bold text-[50px] tracking-[-0.50px] leading-[64px] [font-family:'Space_Grotesk',Helvetica] text-white whitespace-nowrap">
                        {stat.value}
                      </div>
                      <div className="[font-family:'Space_Grotesk',Helvetica] font-semibold text-white text-lg text-center tracking-[0] leading-[18px] whitespace-nowrap">
                        {stat.label}
                      </div>
                    </div>
                    {index < statsRight.length - 1 && (
                      <Separator className="w-[214px] h-px bg-white/20" />
                    )}
                  </React.Fragment>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        <Button className="h-auto flex items-center justify-center gap-2.5 px-[29px] py-[19px] rounded-[5px] bg-[linear-gradient(180deg,rgba(43,77,255,1)_0%,rgba(3,73,239,1)_100%)] hover:opacity-90 transition-opacity">
          <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-[17px] tracking-[0] leading-[normal]">
            Talk to Our Experts
          </span>
          <img
            className="w-[18px] h-[18px]"
            alt="Arrow"
            src="/component-11.svg"
          />
        </Button>

        <img
          className="absolute top-0 right-0 w-[478px] h-[864px] object-cover pointer-events-none"
          alt="Decorative element"
          src="/.png"
        />

        <img
          className="absolute top-[446px] left-0 w-64 h-[198px] object-cover pointer-events-none"
          alt="Decorative element"
          src="/-6583290.png"
        />

        <img
          className="absolute top-[461px] right-10 w-[148px] h-[243px] object-cover pointer-events-none"
          alt="Decorative element"
          src="/-6583291.png"
        />
      </div>

      <div className="max-w-[1498px] mx-auto mt-[120px] px-4">
        <Card className="bg-[#f5f6f7] rounded-[15px] border border-solid border-[#3672ff21]">
          <CardContent className="flex flex-col items-center gap-[22px] px-[61px] py-[50px]">
            <div className="flex flex-col items-center gap-2.5 w-full">
              <div className="flex flex-col items-center gap-2.5 py-2.5">
                <div className="flex items-center gap-[7px]">
                  <img
                    className="w-[47px] h-[13px]"
                    alt="Decorative line"
                    src="/frame-10.svg"
                  />
                  <div className="font-top-titel font-[number:var(--top-titel-font-weight)] text-primary-color text-[length:var(--top-titel-font-size)] tracking-[var(--top-titel-letter-spacing)] leading-[var(--top-titel-line-height)] whitespace-nowrap [font-style:var(--top-titel-font-style)]">
                    Our Technologies
                  </div>
                  <img
                    className="w-[47px] h-[13px]"
                    alt="Decorative line"
                    src="/frame-7.svg"
                  />
                </div>

                <h3 className="font-titel font-[number:var(--titel-font-weight)] text-secondary-color text-[length:var(--titel-font-size)] tracking-[var(--titel-letter-spacing)] leading-[var(--titel-line-height)] whitespace-nowrap [font-style:var(--titel-font-style)]">
                  Technologies and Platforms We Work
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
