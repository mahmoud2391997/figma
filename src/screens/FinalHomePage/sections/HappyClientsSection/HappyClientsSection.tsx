import React from "react";

export const HappyClientsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-16 md:gap-24 lg:gap-[120px] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-[305px] py-16 md:py-24 lg:py-[120px]">
      <div className="inline-flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-[60px] w-full">
        <div className="inline-flex flex-col items-center gap-2.5 text-center">
          <div className="inline-flex items-center gap-[7px]">
            <img
              className="w-[47px] h-[13px]"
              alt="Frame"
              src="/frame-10.svg"
            />

            <div className="w-fit mt-[-1.00px] font-semibold text-primary-color text-lg tracking-wide whitespace-nowrap">
              Happy Clients
            </div>

            <img className="w-[47px] h-[13px]" alt="Frame" src="/frame-7.svg" />
          </div>

          <h2 className="font-bold text-secondary-color text-3xl md:text-4xl tracking-tight leading-tight">
            Trusted by Our Happy Clients
          </h2>
        </div>

        <div className="flex flex-col items-center gap-8 md:gap-12 w-full">
          <img className="w-full max-w-full" alt="Frame" src="/frame-94-1.svg" />
          <img className="w-full max-w-full" alt="Frame" src="/frame-179.svg" />
        </div>
      </div>
    </section>
  );
};
