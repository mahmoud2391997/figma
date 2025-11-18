import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const LetUsWorkTogetherSection = (): JSX.Element => {
  return (
    <section className="relative w-full flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 md:py-24 lg:py-[120px] bg-[#f5f6f7] rounded-[15px] overflow-hidden">
      <img
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-screen-2xl h-auto"
        alt="Many dot"
        src="/many-dot-3.svg"
      />

      <img
        className="absolute top-0 right-0 w-1/2 md:w-1/3 lg:w-1/4 h-auto"
        alt="Many dot"
        src="/many-dot-1.svg"
      />

      <img
        className="absolute bottom-0 left-0 w-1/2 md:w-1/3 lg:w-1/4 h-auto"
        alt="Many dot"
        src="/many-dot-2.svg"
      />

      <div className="relative flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-[30px] max-w-4xl mx-auto z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-[52px] font-bold text-secondary-color tracking-tight leading-tight md:leading-[50px]">
          Hire Ecommerce Experts On Demand
        </h2>

        <p className="text-base md:text-lg lg:text-[17px] font-normal text-black leading-relaxed max-w-lg">
          Flexible hiring for ecommerce developers, designers, and tech
          resources.
        </p>

        <Button className="h-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 md:px-[29.5px] md:py-[18px] bg-primary-color rounded-[5px] hover:bg-primary-color/90 text-white">
          <span className="text-base md:text-lg font-medium leading-normal">
            Request Resources Today
          </span>
          <ArrowRightIcon className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};
