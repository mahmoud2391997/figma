import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

const contactInfo = [
  {
    icon: "/frame-14-1.svg",
    label: "EMAIL:",
    value: "sales@nopaccelerate.com",
  },
  {
    icon: "/frame-137.svg",
    label: "PHONE:",
    value: "+91 99099 55948",
  },
];

const formFields = [
  { placeholder: "Name", type: "input" },
  { placeholder: "Email", type: "input" },
  { placeholder: "Phone", type: "input" },
  { placeholder: "Your Company Name", type: "input" },
  { placeholder: "Write Your Message Here", type: "textarea" },
];

export const ContentSection = (): JSX.Element => {
  return (
    <section className="w-full px-[305px] py-[120px] [background:url(../content.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(245,246,247,1)_0%,rgba(245,246,247,1)_100%)]">
      <div className="flex items-start gap-[74px]">
        <div className="flex flex-col items-start gap-5 flex-1">
          <div className="flex flex-col items-start gap-5 pb-5">
            <div className="flex flex-col items-start justify-center gap-[15px]">
              <div className="flex items-center gap-[7px]">
                <img
                  className="w-[47px] h-[13px]"
                  alt="Frame"
                  src="/frame-10.svg"
                />
                <div className="font-top-titel font-[number:var(--top-titel-font-weight)] text-primary-color text-[length:var(--top-titel-font-size)] tracking-[var(--top-titel-letter-spacing)] leading-[var(--top-titel-line-height)] [font-style:var(--top-titel-font-style)]">
                  Free Consultation
                </div>
              </div>

              <div className="flex flex-col items-start gap-5 w-full">
                <h2 className="font-titel font-[number:var(--titel-font-weight)] text-secondary-color text-[length:var(--titel-font-size)] tracking-[var(--titel-letter-spacing)] leading-[var(--titel-line-height)] [font-style:var(--titel-font-style)]">
                  Book Free Consultation
                </h2>
              </div>
            </div>

            <p className="w-[576px] [font-family:'Space_Grotesk',Helvetica] font-normal text-[#585b6f] text-[17px] tracking-[0] leading-[27px]">
              Let&apos;s discuss how enterprise-ready ecommerce solutions and
              AI-driven innovation can accelerate your business growth today.
            </p>
          </div>

          <div className="flex flex-col items-start gap-[21px] pb-[21px]">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-center gap-5">
                <img className="w-[60px]" alt="Frame" src={contact.icon} />
                <div className="flex flex-col items-start">
                  <div className="[font-family:'Space_Grotesk',Helvetica] font-semibold text-[#424040d4] text-sm tracking-[0] leading-[27px] whitespace-nowrap">
                    {contact.label}
                  </div>
                  <div className="[font-family:'Space_Grotesk',Helvetica] font-normal text-secondary-color text-xl tracking-[0] leading-[27px] whitespace-nowrap">
                    {contact.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <img
            className="w-full h-[166px] rounded-[20px] border-8 border-solid border-[#ffffff] object-cover"
            alt="Image"
            src="/image-2.png"
          />
        </div>

        <Card className="flex-1 bg-[#ffffff] rounded-[10px] border border-solid border-[#3672ff30]">
          <CardContent className="px-[50px] py-[55.5px]">
            <form className="flex flex-col items-start gap-[30px]">
              {formFields.map((field, index) => (
                <div key={index} className="w-full">
                  {field.type === "input" ? (
                    <Input
                      placeholder={field.placeholder}
                      className="w-full h-auto px-5 py-[17.5px] bg-[#f5f6f733] rounded-[5px] border border-solid border-[#3672ff1a] [font-family:'Space_Grotesk',Helvetica] font-normal text-[#585b6f80] text-[17px] tracking-[0] leading-[27px]"
                    />
                  ) : (
                    <Textarea
                      placeholder={field.placeholder}
                      className="w-full h-auto px-5 pt-[17.5px] pb-[64.5px] bg-[#f5f6f733] rounded-[5px] border border-solid border-[#3672ff1a] [font-family:'Space_Grotesk',Helvetica] font-normal text-[#585b6f80] text-[17px] tracking-[0] leading-[27px] resize-none"
                    />
                  )}
                </div>
              ))}

              <Button
                type="submit"
                className="h-auto px-[41px] py-[20.5px] bg-primary-color rounded-[5px] [font-family:'Space_Grotesk',Helvetica] font-medium text-white text-[17px] tracking-[0] leading-[normal] hover:bg-primary-color/90"
              >
                Send Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
