import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "What ecommerce services do you offer?",
    answer:
      "We provide website, app, AI/ML, integrations, and custom development.",
  },
  {
    id: "item-2",
    question: "Do you work with all industries?",
    answer: "",
  },
  {
    id: "item-3",
    question: "Can I hire developers on demand?",
    answer: "",
  },
  {
    id: "item-4",
    question: "Do you offer support after launch?",
    answer: "",
  },
  {
    id: "item-5",
    question: "How secure are your ecommerce solutions?",
    answer: "",
  },
  {
    id: "item-6",
    question: "What makes nopAccelerate different?",
    answer: "",
  },
];

export const FaqSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-5 px-4 md:px-[305px] py-[120px]">
      <div className="inline-flex flex-col items-center gap-2.5 pt-0 pb-[25px] px-0">
        <h2 className="font-titel font-[number:var(--titel-font-weight)] text-secondary-color text-[length:var(--titel-font-size)] tracking-[var(--titel-letter-spacing)] leading-[var(--titel-line-height)] whitespace-nowrap [font-style:var(--titel-font-style)]">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-[63px] w-full max-w-[1310px]">
        <div className="flex-1 w-full lg:w-auto">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-b border-[#d8d8d8]"
              >
                <AccordionTrigger className="py-[23px] text-left hover:no-underline [&[data-state=open]]:text-primary-color">
                  <span className="[font-family:'Space_Grotesk',Helvetica] font-bold text-2xl tracking-[-0.24px] leading-9">
                    {item.question}
                  </span>
                </AccordionTrigger>
                {item.answer && (
                  <AccordionContent className="pb-[23px]">
                    <p className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#585b6f] text-[17px] tracking-[0] leading-[27px] max-w-[642px]">
                      {item.answer}
                    </p>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex-shrink-0">
          <img
            className="w-full lg:w-[527px] h-auto lg:h-[530px] object-cover"
            alt="Faq hmm"
            src="/faq-hmm-1.png"
          />
        </div>
      </div>
    </section>
  );
};
