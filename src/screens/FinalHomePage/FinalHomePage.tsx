import { MenuIcon, PhoneIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
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
  { label: "Services" },
  { label: "Industries" },
  { label: "Solution" },
  { label: "Hire Developers" },
  { label: "Insights" },
  { label: "Company" },
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white overflow-hidden w-full relative">
      <header className="relative w-full h-[92px] bg-white top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-auto"
              alt="Group"
              src="/group-11--3--1-1.png"
            />
          </div>

          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex justify-center gap-[42px]">
                {navigationItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger className="inline-flex items-center gap-[5px] bg-transparent hover:bg-transparent data-[state=open]:bg-transparent h-auto p-0">
                      <span className="font-semibold text-secondary-color text-[17px] tracking-[0] leading-[normal] whitespace-nowrap">
                        {item.label}
                      </span>
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex items-center">
            <Button className="h-auto inline-flex items-center justify-center gap-2.5 px-[25px] py-[13px] rounded-[5px] bg-primary-gradient hover:opacity-90">
              <PhoneIcon className="w-[17px] h-[17px]" />
              <span className="font-semibold text-white text-[17px] tracking-[0] leading-[normal] whitespace-nowrap">
                Contact
              </span>
            </Button>
          </div>

          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-[92px] left-0 w-full bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-secondary-color hover:text-primary-color hover:bg-gray-50"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-4">
                <Button className="w-full h-auto inline-flex items-center justify-center gap-2.5 px-[25px] py-[13px] rounded-[5px] bg-primary-gradient hover:opacity-90">
                  <PhoneIcon className="w-[17px] h-[17px]" />
                  <span className="font-semibold text-white text-[17px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Contact
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <HeroSliderSection />
      <HappyClientsSection />
      <OurServicesSection />
      <AboutUsSection />
      <SolutionsSection />

      <section className="relative w-full bg-[#f5f6f7] rounded-[15px] py-16 md:py-24 lg:py-[120px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 md:gap-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-color text-center tracking-tight leading-tight">
            Recognized Excellence
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 lg:gap-24 items-center">
            {partnerLogos.map((logo, index) => (
              <img
                key={index}
                className="w-full h-auto object-contain" // Adjusted for better responsiveness
                alt={logo.alt}
                src={logo.src}
              />
            ))}
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
