import { ChevronRightIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    image: "/image.png",
    text: "Very happy with the work your company has done and the professionalism and responsiveness. Will definitely be using you for more development work.",
    name: "Bhavik Shah",
    company: "Atma IT",
  },
  {
    image: "/image-1.png",
    text: "A few months ago we used NOPAccelerate. The product is very fast and helped us a lot in implementations.The team collaborates NOP always sharing and helping when new codes have limitations.We strongly recommend the product.",
    name: "Bhavik Shah",
    company: "The Lyoness Group, USA",
  },
];

const industries = [
  { icon: "/frame-50.svg", title: "Healthcare" },
  { icon: "/frame-37.svg", title: "FinTech" },
  { icon: "/frame-19.svg", title: "PropTech" },
  { icon: "/frame-24.svg", title: "Manufacturing" },
  { icon: "/frame-21.svg", title: "Travel & Hospitality" },
  { icon: "/frame-25.svg", title: "Fashion & Apparel" },
  { icon: "/frame-20.svg", title: "Food & Beverage" },
  { icon: "/frame-31.svg", title: "Retail & Ecommerce" },
];

export const IndustryTestimonialsSection = (): JSX.Element => {
  const halfLength = Math.ceil(industries.length / 2);
  const column1Industries = industries.slice(0, halfLength);
  const column2Industries = industries.slice(halfLength);

  return (
    <section className="w-full relative">
      <div className="flex flex-col items-center justify-center gap-8 md:gap-12 py-16 md:py-24 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-[305px]">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-color tracking-tight leading-tight">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-8 md:gap-[30px] w-full">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex-col items-start gap-2.5 p-6 md:p-8 lg:p-10 bg-white rounded-[10px] border border-solid border-[#4970e154]"
            >
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-[30px]">
                  <img
                    className="w-20 h-20 md:w-[90px] md:h-[90px] rounded-full object-cover flex-shrink-0 mx-auto sm:mx-0"
                    alt="Client"
                    src={testimonial.image}
                  />
                  <div className="flex flex-col items-start gap-6 md:gap-[30px] flex-grow">
                    <p className="text-base md:text-lg italic text-[#585b6f] leading-relaxed">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex flex-col items-start gap-1">
                        <div className="text-lg md:text-xl font-bold text-secondary-color leading-tight">
                          {testimonial.name}
                        </div>
                        <div className="text-base md:text-lg text-[#585b6f] leading-snug">
                          {testimonial.company}
                        </div>
                      </div>
                      <img
                        className="w-12 h-12 md:w-[60px] md:h-[60px]"
                        alt="Quote"
                        src="/frame-22.svg"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <img
          className="flex-[0_0_auto]"
          alt="Navigation"
          src="/frame-179.svg"
        />
      </div>

      <div className="relative w-full bg-secondary-color py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-[305px]">
        <div className="flex flex-col lg:flex-row items-start gap-12 md:gap-16 lg:gap-24">
          <div className="flex flex-col items-start gap-8 md:gap-10 lg:max-w-md flex-shrink-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Industries We Serve
            </h2>
            <p className="text-base md:text-lg text-[#ffffffb5] leading-relaxed">
              At nopAccelerate, we craft industry-specific ecommerce
              solutions using modern technology, AI-driven features, and
              scalable systems to solve real business challenges and
              accelerate digital growth.
            </p>
            <Button className="flex items-center gap-2.5 px-6 py-4 h-auto rounded-[5px] bg-primary-gradient hover:opacity-90">
              <span className="font-medium text-white text-base md:text-lg leading-normal">
                View all Industries
              </span>
              <ChevronRightIcon className="w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            <div className="flex flex-col items-start justify-center gap-5">
              {column1Industries.map((industry, index) => (
                <Card
                  key={index}
                  className="flex items-center gap-4 px-6 py-5 w-full bg-[#101c66] rounded-[10px] border border-solid border-[#ffffff0f] cursor-pointer hover:bg-[#1a2680] transition-colors"
                >
                  <CardContent className="p-0 flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                      <img className="w-10 h-10" alt={industry.title} src={industry.icon} />
                      <div className="text-lg font-bold text-white leading-tight truncate">
                        {industry.title}
                      </div>
                    </div>
                    <img className="w-2.5 h-4" alt="Arrow" src="/frame-15.svg" />
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex flex-col items-start justify-center gap-5">
              {column2Industries.map((industry, index) => (
                <Card
                  key={index}
                  className="flex items-center gap-4 px-6 py-5 w-full bg-[#101c66] rounded-[10px] border border-solid border-[#ffffff0f] cursor-pointer hover:bg-[#1a2680] transition-colors"
                >
                  <CardContent className="p-0 flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                      <img className="w-10 h-10" alt={industry.title} src={industry.icon} />
                      <div className="text-lg font-bold text-white leading-tight truncate">
                        {industry.title}
                      </div>
                    </div>
                    <img className="w-2.5 h-4" alt="Arrow" src="/frame-15.svg" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-[305px] my-12 md:my-16 lg:my-[58px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 p-8 md:p-12 lg:p-20 rounded-[15px] bg-cover bg-center [background:url(/let-s-work-together.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(43,77,255,1)_0%,rgba(43,77,255,1)_100%)]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight text-center lg:text-left">
            Let&apos;s Work Together
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-10">
            <Button className="flex items-center justify-center gap-2.5 px-6 py-4 h-auto bg-white rounded-[5px] hover:bg-gray-100 text-secondary-color">
              <span className="font-medium text-base md:text-lg">
                Book a Free Consultation
              </span>
              <ChevronRightIcon className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-4">
              <div className="flex w-12 h-12 items-center justify-center bg-white rounded-full">
                <PhoneIcon className="w-6 h-6 text-secondary-color" />
              </div>
              <div className="flex flex-col items-start">
                <div className="font-bold text-white text-sm leading-tight">
                  Call Us Now
                </div>
                <div className="font-medium text-white text-lg leading-snug">
                  +91 9909955948
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
