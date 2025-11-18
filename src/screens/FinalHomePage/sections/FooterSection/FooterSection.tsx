import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

const quickLinks = [
  "Services",
  "Solutions",
  "Case Studies",
  "Blogs",
  "Industries",
  "Career",
];

const ourServices = [
  "AI/ML for Ecommerce",
  "Ecommerce Development",
  "Mobile Commerce Services",
  "nopCommerce Development",
  "E-store Migration Services",
  "Offshore Development Services",
];

const hireDevelopers = [
  ".NET Developer",
  "nopCommerce Developer",
  "Full-Stack Developer",
  "DevOps Engineer",
  "AI/ML Engineer",
  "Ui/Ux designer",
];

const ourProducts = [
  {
    label: "nopAccelerate Plus Search",
    href: "https://www.nopaccelerate.com/nopcommerce-best-search-plugin-nopaccelerate-search-free/",
  },
  {
    label: "nopAccelerate CDN",
    href: "https://www.nopaccelerate.com/nopcommerce-plugins/nopaccelerate-cdn/",
  },
  {
    label: "nopAccelerate REST Web Services API Plugin",
    href: "https://www.nopaccelerate.com/nopcommerce-plugins/nopaccelerate-rest-web-services-api-plugin/",
  },
  {
    label: "All nopCommerce Plugins",
    href: "https://www.nopaccelerate.com/nopcommerce-plugins/",
  },
  {
    label: "All nopCommerce Themes",
    href: "http://themes.nopaccelerate.com/themes/",
  },
  {
    label: "nopAccelerate Product Search Extension",
    href: "https://www.nopaccelerate.com/nopcommerce-product-search",
  },
];

const footerLinks = ["Feedback", "Privacy Policy", "Terms"];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-transparent">
      <div className="w-full min-h-[510px] bg-[url(/rectangle-46.svg)] bg-[100%_100%] px-4 py-[75px]">
        <div className="max-w-[1310px] mx-auto">
          <div className="flex flex-wrap items-start gap-[31.25px] mb-[89px]">
            <div className="flex flex-col items-start gap-8 flex-shrink-0">
              <img
                className="w-[234.86px] h-10 object-cover"
                alt="Group"
                src="/group-11--3--1.png"
              />

              <div className="w-[249px] [font-family:'Space_Grotesk',Helvetica] font-normal text-white text-[17px] tracking-[0] leading-[22px]">
                Want To Talk About Your Project?
              </div>

              <Button className="h-auto bg-primary-color hover:bg-primary-color/90 rounded-[5px] px-[28.5px] py-[19px] gap-2.5">
                <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-[17px] tracking-[0] leading-[normal]">
                  Schedule a Call
                </span>
                <img
                  className="w-[18px] h-[18px]"
                  alt="Component"
                  src="/component-11.svg"
                />
              </Button>

              <div className="flex items-start gap-[17px]">
                <div className="flex flex-col items-start gap-2.5 p-2.5 rounded-[10px]">
                  <img
                    className="w-24 h-[90px]"
                    alt="Download"
                    src="/download.png"
                  />
                </div>

                <div className="flex flex-col items-start gap-2.5 px-2.5 py-[17.5px] rounded-[10px]">
                  <img
                    className="w-24 h-[75px] object-cover"
                    alt="Good firms awards"
                    src="/good-firms-awards.png"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-[30px] flex-shrink-0">
              <h3 className="[font-family:'Urbanist',Helvetica] font-bold text-white text-[22px] tracking-[0] leading-8 whitespace-nowrap">
                Quick Links
              </h3>

              <nav className="flex flex-col items-start gap-[23px]">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-[17px] tracking-[0] leading-[normal] hover:underline"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col items-start gap-[30px] flex-shrink-0">
              <h3 className="[font-family:'Urbanist',Helvetica] font-bold text-white text-[22px] tracking-[0] leading-8 whitespace-nowrap">
                Our Services
              </h3>

              <nav className="flex flex-col items-start gap-[23px]">
                {ourServices.map((service, index) => (
                  <a
                    key={index}
                    href="#"
                    className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-[17px] tracking-[0] leading-[normal] hover:underline"
                  >
                    {service}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col items-start gap-[30px] flex-shrink-0">
              <h3 className="[font-family:'Urbanist',Helvetica] font-bold text-white text-[22px] tracking-[0] leading-8 whitespace-nowrap">
                Hire Developers
              </h3>

              <nav className="flex flex-col items-start gap-[23px]">
                {hireDevelopers.map((developer, index) => (
                  <a
                    key={index}
                    href="#"
                    className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-[17px] tracking-[0] leading-[normal] hover:underline"
                  >
                    {developer}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col items-start gap-[30px] flex-shrink-0">
              <h3 className="[font-family:'Urbanist',Helvetica] font-bold text-white text-[22px] tracking-[0] leading-8 whitespace-nowrap">
                Our Products
              </h3>

              <nav className="flex flex-col items-start gap-[23px]">
                {ourProducts.map((product, index) => (
                  <a
                    key={index}
                    className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-[17px] tracking-[0] leading-[normal] hover:underline"
                    href={product.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {product.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <Separator className="bg-white/20 mb-[11px]" />

          <div className="flex flex-wrap items-center gap-[51px]">
            <div className="flex items-center gap-2.5">
              <span className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-base tracking-[-0.08px] leading-8 whitespace-nowrap">
                Social Share:
              </span>
              <img alt="Frame" src="/frame-50-1.svg" />
            </div>

            <p className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[17px] tracking-[0] leading-8 whitespace-nowrap">
              © Copyright 2024. Xcellence-IT - Your Reliable IT Outsourcing
              Partner. All Rights Reserved.
            </p>

            <nav className="flex items-center gap-2.5">
              {footerLinks.map((link, index) => (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <div className="w-0.5 h-0.5 bg-[#d9d9d9] rounded-[1px]" />
                  )}
                  <a
                    href="#"
                    className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-base tracking-[0] leading-[26px] whitespace-nowrap hover:underline"
                  >
                    {link}
                  </a>
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
