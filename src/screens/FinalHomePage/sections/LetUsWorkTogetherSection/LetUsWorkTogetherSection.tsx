import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const LetUsWorkTogetherSection = (): JSX.Element => {
  return (
    <section className="relative w-full flex items-center justify-center px-4 py-[120px] bg-[#f5f6f7] rounded-[15px]">
      <img
        className="absolute top-[calc(50.00%_-_214px)] left-[calc(50.00%_-_791px)] w-[1582px] h-[428px]"
        alt="Many dot"
        src="/many-dot-3.svg"
      />

      <img
        className="absolute top-0 right-0 w-[462px] h-[125px]"
        alt="Many dot"
        src="/many-dot-1.svg"
      />

      <img
        className="absolute left-0 bottom-0 w-[462px] h-[125px]"
        alt="Many dot"
        src="/many-dot-2.svg"
      />

      <div className="relative flex flex-col items-center justify-center gap-[30px] max-w-[1310px] mx-auto z-10">
        <h2 className="text-center [font-family:'Space_Grotesk',Helvetica] font-bold text-secondary-color text-[52px] tracking-[-0.52px] leading-[50px]">
          Hire Ecommerce Experts On Demand
        </h2>

        <p className="text-center [font-family:'Space_Grotesk',Helvetica] font-normal text-black text-[17px] tracking-[0] leading-[27px]">
          Flexible hiring for ecommerce developers, designers, and tech
          resources.
        </p>

        <Button className="h-auto inline-flex items-center justify-center gap-2.5 px-[29.5px] py-[18px] bg-primary-color rounded-[5px] hover:bg-primary-color/90">
          <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]">
            Request Resources Today
          </span>
          <ArrowRightIcon className="w-[18px] h-[18px] text-white" />
        </Button>
      </div>
    </section>
  );
};
