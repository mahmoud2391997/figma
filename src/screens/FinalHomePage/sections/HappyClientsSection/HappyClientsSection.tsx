import React from "react";

export const HappyClientsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[120px] px-4 md:px-[305px] py-[120px]">
      <div className="inline-flex flex-col items-center justify-center gap-[60px] w-full">
        <div className="inline-flex flex-col items-center gap-2.5">
          <div className="inline-flex items-center gap-[7px]">
            <img
              className="w-[47px] h-[13px]"
              alt="Frame"
              src="/frame-10.svg"
            />

            <div className="w-fit mt-[-1.00px] font-top-titel font-[number:var(--top-titel-font-weight)] text-primary-color text-[length:var(--top-titel-font-size)] tracking-[var(--top-titel-letter-spacing)] leading-[var(--top-titel-line-height)] whitespace-nowrap [font-style:var(--top-titel-font-style)]">
              Happy Clients
            </div>

            <img className="w-[47px] h-[13px]" alt="Frame" src="/frame-7.svg" />
          </div>

          <h2 className="w-fit font-titel font-[number:var(--titel-font-weight)] text-secondary-color text-[length:var(--titel-font-size)] text-center tracking-[var(--titel-letter-spacing)] leading-[var(--titel-line-height)] whitespace-nowrap [font-style:var(--titel-font-style)]">
            Trusted by Our Happy Clients
          </h2>
        </div>

        <img className="w-full max-w-full" alt="Frame" src="/frame-94-1.svg" />

        <img className="w-full max-w-full" alt="Frame" src="/frame-179.svg" />
      </div>
    </section>
  );
};
