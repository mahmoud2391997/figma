import { PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu";
import { AboutUsSection } from "./sections/AboutUsSection";
import { BlogSection } from "./sections/BlogSection";
import { CaseStudySection } from "./sections/CaseStudySection";
import { ContentSection } from "./sections/ContentSection";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { HappyClientsSection } from "./sections/HappyClientsSection";
import { HeroSliderSection } from "./sections/HeroSliderSection";
import { IndustryTestimonialsSection } from "./sections/IndustryTestimonialsSection";
import { LetUsWorkTogetherSection } from "./sections/LetUsWorkTogetherSection";
import { OurServicesSection } from "./sections/OurServicesSection";
import { SolutionsSection } from "./sections/SolutionsSection";
import { SuccessStoriesSection } from "./sections/SuccessStoriesSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";

const navigationItems = [
  { label: "Services", fontFamily: "[font-family:'Space_Grotesk',Helvetica]" },
  {
    label: "Industries",
    fontFamily: "[font-family:'Space_Grotesk',Helvetica]",
  },
  { label: "Solution", fontFamily: "[font-family:'Space_Grotesk',Helvetica]" },
  {
    label: "Hire Developers",
    fontFamily: "[font-family:'Souliyo_Unicode-Regular',Helvetica]",
  },
  { label: "Insights", fontFamily: "[font-family:'Space_Grotesk',Helvetica]" },
  { label: "Company", fontFamily: "[font-family:'Space_Grotesk',Helvetica]" },
];

const partnerLogos = [
  {
    src: "/microsoft-logo-1.png",
    alt: "Microsoft logo",
    width: "w-60",
    height: "h-[60px]",
  },
  {
    src: "/salesforce-partner-logo-1.png",
    alt: "Salesforce partner",
    width: "w-[255px]",
    height: "h-[123px]",
  },
  {
    src: "/download-1.png",
    alt: "Download",
    width: "w-[130px]",
    height: "h-[123px]",
  },
  {
    src: "/good-firms-awards.png",
    alt: "Good firms awards",
    width: "w-[154px]",
    height: "h-[120px]",
  },
];

export const FinalHomePage = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full relative">
      <header className="relative w-full h-[92px] bg-white top-5">
        <div className="max-w-[1920px] mx-auto relative h-full">
          <img
            className="absolute top-4 left-[120px] w-[352px] h-[60px] object-cover"
            alt="Group"
            src="/group-11--3--1-1.png"
          />

          <NavigationMenu className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <NavigationMenuList className="flex justify-center gap-[42px]">
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger className="inline-flex items-center gap-[5px] bg-transparent hover:bg-transparent data-[state=open]:bg-transparent h-auto p-0">
                    <span
                      className={`mt-[-1.00px] ${item.fontFamily} font-semibold text-secondary-color text-[17px] tracking-[0] leading-[normal] whitespace-nowrap`}
                    >
                      {item.label}
                    </span>
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="absolute top-[22px] left-[1656px] h-auto inline-flex items-center justify-center gap-2.5 px-[25px] py-[13px] rounded-[5px] bg-[linear-gradient(180deg,rgba(43,77,255,1)_0%,rgba(3,73,239,1)_100%)] hover:opacity-90">
            <PhoneIcon className="w-[17px] h-[17px]" />
            <span className="mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-semibold text-white text-[17px] tracking-[0] leading-[normal] whitespace-nowrap">
              Contact
            </span>
          </Button>
        </div>
      </header>

      <HeroSliderSection />
      <HappyClientsSection />
      <OurServicesSection />
      <AboutUsSection />
      <SolutionsSection />

      <section className="relative w-full bg-[#f5f6f7] rounded-[15px]">
        <div className="max-w-[1920px] mx-auto flex flex-col items-center gap-2.5 px-[305px] py-[120px]">
          <div className="inline-flex flex-col items-center gap-[22px]">
            <div className="inline-flex flex-col items-start gap-2.5 px-0 py-2.5">
              <div className="items-center gap-2.5 px-0 py-[17.5px] inline-flex flex-col justify-center">
                <h2 className="mt-[-1.00px] font-titel font-[number:var(--titel-font-weight)] text-secondary-color text-[length:var(--titel-font-size)] tracking-[var(--titel-letter-spacing)] leading-[var(--titel-line-height)] whitespace-nowrap [font-style:var(--titel-font-style)]">
                  Recognized Excellence
                </h2>
              </div>
            </div>

            <div className="inline-flex items-center gap-[177px] pt-0 pb-[30px] px-0">
              {partnerLogos.map((logo, index) => (
                <img
                  key={index}
                  className={`${logo.width} ${logo.height} object-cover`}
                  alt={logo.alt}
                  src={logo.src}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <SuccessStoriesSection />
      <CaseStudySection />
      <IndustryTestimonialsSection />
      <BlogSection />
      <LetUsWorkTogetherSection />
      <FaqSection />
      <ContentSection />
      <FooterSection />
    </div>
  );
};
