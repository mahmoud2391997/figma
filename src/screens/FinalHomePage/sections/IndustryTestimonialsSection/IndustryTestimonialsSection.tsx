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
  {
    icon: "/frame-50.svg",
    title: "Healthcare",
    column: 1,
  },
  {
    icon: "/frame-37.svg",
    title: "FinTech",
    column: 2,
  },
  {
    icon: "/frame-19.svg",
    title: "PropTech",
    column: 1,
  },
  {
    icon: "/frame-24.svg",
    title: "Manufacturing",
    column: 2,
  },
  {
    icon: "/frame-21.svg",
    title: "Travel & Hospitality",
    column: 1,
  },
  {
    icon: "/frame-25.svg",
    title: "Fashion & Apparel",
    column: 2,
  },
  {
    icon: "/frame-20.svg",
    title: "Food & Beverage",
    column: 1,
  },
  {
    icon: "/frame-31.svg",
    title: "Retail & Ecommerce",
    column: 2,
  },
];

export const IndustryTestimonialsSection = (): JSX.Element => {
  const column1Industries = industries.filter((ind) => ind.column === 1);
  const column2Industries = industries.filter((ind) => ind.column === 2);

  return (
    <section className="w-full relative">
      <div className="flex flex-col items-center justify-center gap-[30px] pt-[120px] pb-0 px-[305px]">
        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-col items-start justify-center gap-[15px]">
            <div className="flex flex-col items-start gap-5 pt-0 pb-2.5 px-0 w-full">
              <h2 className="w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-bold text-secondary-color text-[42px] tracking-[-0.42px] leading-[50px] whitespace-nowrap">
                What Our Clients Say
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-[30px]">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="flex-col items-start gap-2.5 p-10 bg-white rounded-[10px] border border-solid border-[#4970e154]"
              >
                <CardContent className="p-0">
                  <div className="flex items-start gap-[30px]">
                    <img
                      className="w-[90px] h-[90px] rounded-[90px] object-cover"
                      alt="Client"
                      src={testimonial.image}
                    />

                    <div className="flex flex-col items-start gap-[30px]">
                      <p className="w-[435px] h-32 mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal italic text-[#585b6f] text-xl tracking-[0] leading-8 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:4] [-webkit-box-orient:vertical]">
                        {testimonial.text}
                      </p>

                      <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col items-start gap-[3px]">
                          <div className="w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-bold text-secondary-color text-xl tracking-[0] leading-[30px] whitespace-nowrap">
                            {testimonial.name}
                          </div>

                          <div className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#585b6f] text-xl tracking-[0] leading-[27px]">
                            {testimonial.company}
                          </div>
                        </div>

                        <img
                          className="w-[60px] h-[60px]"
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
        </div>

        <img
          className="flex-[0_0_auto]"
          alt="Navigation"
          src="/frame-179.svg"
        />
      </div>

      <div className="flex items-start gap-5 pt-80 pb-[220px] px-[305px] bg-secondary-color relative">
        <div className="flex items-start gap-12">
          <div className="flex flex-col items-start justify-center gap-[50px]">
            <div className="flex flex-col items-start gap-5 pl-0 pr-1.5 pt-0 pb-2.5">
              <div className="flex flex-col items-start gap-10">
                <div className="flex flex-col items-start gap-[25px]">
                  <h2 className="w-fit mt-[-1.00px] font-titel font-[number:var(--titel-font-weight)] text-white text-[length:var(--titel-font-size)] tracking-[var(--titel-letter-spacing)] leading-[var(--titel-line-height)] whitespace-nowrap [font-style:var(--titel-font-style)]">
                    Industries We Serve
                  </h2>

                  <p className="w-[400px] [font-family:'Space_Grotesk',Helvetica] font-normal text-[#ffffffb5] text-[17px] tracking-[0] leading-[27px]">
                    At nopAccelerate, we craft industry-specific ecommerce
                    solutions using modern technology, AI-driven features, and
                    scalable systems to solve real business challenges and
                    accelerate digital growth.
                  </p>
                </div>

                <Button className="flex items-center gap-2.5 px-[29px] py-[19px] h-auto rounded-[5px] overflow-hidden bg-[linear-gradient(180deg,rgba(43,77,255,1)_0%,rgba(3,73,239,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(43,77,255,0.9)_0%,rgba(3,73,239,0.9)_100%)]">
                  <span className="flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Souliyo_Unicode-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[23px] whitespace-nowrap">
                    View all Industries
                  </span>
                  <ChevronRightIcon className="w-[18px] h-[18px]" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 pl-2.5 pr-0 py-0">
            <div className="flex flex-col items-start justify-center gap-5">
              {column1Industries.map((industry, index) => (
                <Card
                  key={index}
                  className={`flex items-center gap-[31px] px-[30px] py-[25px] bg-[#101c66] rounded-[10px] border border-solid border-[#ffffff0f] cursor-pointer hover:bg-[#1a2680] transition-colors ${
                    index === 0 ? "w-[413px] h-[92px]" : ""
                  }`}
                >
                  <CardContent className="p-0 flex items-center justify-between w-full">
                    <div className="flex items-center gap-5 px-0 py-px">
                      <img
                        className="w-10 h-10"
                        alt={industry.title}
                        src={industry.icon}
                      />

                      <div className="w-[253px] h-8 [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-2xl tracking-[-0.60px] leading-8 whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                        {industry.title}
                      </div>
                    </div>

                    <img
                      className="w-[9px] h-[15px]"
                      alt="Arrow"
                      src="/frame-15.svg"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col items-start justify-center gap-5">
              {column2Industries.map((industry, index) => (
                <Card
                  key={index}
                  className="flex items-center gap-[31px] px-[30px] py-[25px] bg-[#101c66] rounded-[10px] border border-solid border-[#ffffff0f] cursor-pointer hover:bg-[#1a2680] transition-colors"
                >
                  <CardContent className="p-0 flex items-center justify-between w-full">
                    <div className="flex items-center gap-5 px-0 py-px">
                      <img
                        className="w-10 h-10"
                        alt={industry.title}
                        src={industry.icon}
                      />

                      <div className="w-[253px] h-8 [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-2xl tracking-[-0.60px] leading-8 whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                        {industry.title}
                      </div>
                    </div>

                    <img
                      className="w-[9px] h-[15px]"
                      alt="Arrow"
                      src="/frame-15.svg"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 right-0 w-[478px] h-[864px] object-cover"
          alt="Decoration"
          src="/.png"
        />

        <img
          className="absolute top-[393px] right-[19px] w-[266px] h-[283px] object-cover"
          alt="Decoration"
          src="/-1.png"
        />
      </div>

      <div className="flex flex-col items-start gap-2.5 px-[60px] py-20 mx-[305px] mt-[58px] rounded-[15px] [background:url(/let-s-work-together.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(43,77,255,1)_0%,rgba(43,77,255,1)_100%)]">
        <div className="flex items-center gap-[203px] px-0 py-[0.5px]">
          <h2 className="w-fit [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[52px] tracking-[-0.52px] leading-[50px] whitespace-nowrap">
            Let&apos;s Work Together
          </h2>

          <div className="flex items-center gap-[30px]">
            <Button className="flex items-center justify-center gap-2.5 px-[29.5px] py-[18px] h-auto bg-white rounded-[5px] hover:bg-gray-100">
              <span className="w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-medium text-secondary-color text-lg tracking-[0] leading-[normal]">
                Book a Free Consultation
              </span>
              <ChevronRightIcon className="w-[18px] h-[18px] text-secondary-color" />
            </Button>

            <div className="flex items-start gap-[15px]">
              <div className="flex w-14 h-14 items-center justify-center bg-white rounded-[28px]">
                <PhoneIcon className="w-6 h-6 text-secondary-color" />
              </div>

              <div className="flex flex-col items-start">
                <div className="w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-sm tracking-[-0.07px] leading-7 whitespace-nowrap">
                  Call Us Now
                </div>

                <div className="w-fit [font-family:'Space_Grotesk',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap">
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
