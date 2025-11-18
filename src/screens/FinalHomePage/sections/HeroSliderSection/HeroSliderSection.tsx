import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSliderSection = (): JSX.Element => {
  const circularTextLetters = [
    {
      char: "E",
      rotation: "rotate-[100deg]",
      top: "top-[74px]",
      left: "left-[calc(50.00%_+_55px)]",
      width: "w-[9px]",
    },
    {
      char: "X",
      rotation: "rotate-[114deg]",
      top: "top-[89px]",
      left: "left-[calc(50.00%_+_49px)]",
      width: "w-3",
    },
    {
      char: "P",
      rotation: "rotate-[128deg]",
      top: "top-[101px]",
      left: "left-[calc(50.00%_+_43px)]",
      width: "w-2.5",
    },
    {
      char: "L",
      rotation: "rotate-[142deg]",
      top: "top-[111px]",
      left: "left-[calc(50.00%_+_33px)]",
      width: "w-[9px]",
    },
    {
      char: "O",
      rotation: "rotate-[156deg]",
      top: "top-[119px]",
      left: "left-[calc(50.00%_+_18px)]",
      width: "w-3",
    },
    {
      char: "R",
      rotation: "rotate-[170deg]",
      top: "top-[123px]",
      left: "left-[calc(50.00%_+_5px)]",
      width: "w-2.5",
    },
    {
      char: "E",
      rotation: "rotate-[-176deg]",
      top: "top-[124px]",
      left: "left-[calc(50.00%_-_9px)]",
      width: "w-[9px]",
    },
    {
      char: "M",
      rotation: "rotate-[-148deg]",
      top: "top-[115px]",
      left: "left-[calc(50.00%_-_40px)]",
      width: "w-[15px]",
    },
    {
      char: "O",
      rotation: "rotate-[-134deg]",
      top: "top-[105px]",
      left: "left-[calc(50.00%_-_49px)]",
      width: "w-[11px]",
    },
    {
      char: "R",
      rotation: "rotate-[-120deg]",
      top: "top-[93px]",
      left: "left-[calc(50.00%_-_58px)]",
      width: "w-[11px]",
    },
    {
      char: "E",
      rotation: "rotate-[-106deg]",
      top: "top-20",
      left: "left-[calc(50.00%_-_63px)]",
      width: "w-[9px]",
    },
    {
      char: ".",
      rotation: "rotate-[-92deg]",
      top: "top-[65px]",
      left: "left-[calc(50.00%_-_63px)]",
      width: "w-[5px]",
    },
    {
      char: "E",
      rotation: "rotate-[-78deg]",
      top: "top-[50px]",
      left: "left-[calc(50.00%_-_64px)]",
      width: "w-2.5",
    },
    {
      char: "X",
      rotation: "rotate-[-64deg]",
      top: "top-[37px]",
      left: "left-[calc(50.00%_-_60px)]",
      width: "w-[11px]",
    },
    {
      char: "P",
      rotation: "rotate-[-50deg]",
      top: "top-6",
      left: "left-[calc(50.00%_-_51px)]",
      width: "w-2.5",
    },
    {
      char: "L",
      rotation: "rotate-[-36deg]",
      top: "top-3.5",
      left: "left-[calc(50.00%_-_40px)]",
      width: "w-2.5",
    },
    {
      char: "O",
      rotation: "rotate-[-22deg]",
      top: "top-[7px]",
      left: "left-[calc(50.00%_-_28px)]",
      width: "w-3",
    },
    {
      char: "R",
      rotation: "rotate-[-8deg]",
      top: "top-1",
      left: "left-[calc(50.00%_-_13px)]",
      width: "w-[11px]",
    },
    {
      char: "E",
      rotation: "rotate-6",
      top: "top-[3px]",
      left: "left-[calc(50.00%_+_2px)]",
      width: "w-[9px]",
    },
    {
      char: "M",
      rotation: "rotate-[34deg]",
      top: "top-3.5",
      left: "left-[calc(50.00%_+_27px)]",
      width: "w-[15px]",
    },
    {
      char: "O",
      rotation: "rotate-[48deg]",
      top: "top-[23px]",
      left: "left-[calc(50.00%_+_40px)]",
      width: "w-[11px]",
    },
    {
      char: "R",
      rotation: "rotate-[62deg]",
      top: "top-9",
      left: "left-[calc(50.00%_+_48px)]",
      width: "w-[11px]",
    },
    {
      char: "E",
      rotation: "rotate-[76deg]",
      top: "top-[49px]",
      left: "left-[calc(50.00%_+_54px)]",
      width: "w-[9px]",
    },
    {
      char: ".",
      rotation: "rotate-90",
      top: "top-16",
      left: "left-[calc(50.00%_+_58px)]",
      width: "w-[5px]",
    },
  ];

  return (
    <section className="relative w-full flex justify-center bg-cover bg-center [background:url(../background.png)]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto py-24 md:py-36 lg:py-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="flex flex-col gap-6 md:gap-8 text-center lg:text-left">
              <h1 className="font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-[80px] tracking-tight leading-tight md:leading-[90px]">
                Enterprise AI-Powered eCommerce Development Company
              </h1>

              <p className="text-[#ffffffb5] text-base sm:text-lg md:text-[17px] leading-relaxed max-w-md mx-auto lg:mx-0">
                Delivering scalable, secure, and intelligent eCommerce
                solutions for enterprises, B2B, and global brands.
              </p>

              <div className="flex justify-center lg:justify-start">
                <Button className="w-fit h-auto px-6 py-3 md:px-[25px] md:py-[13px] bg-primary-color rounded-[5px] font-semibold text-white text-base md:text-[17px] tracking-wide leading-normal">
                  Let&#39;s Redefine eCommerce
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:flex items-center justify-center">
              <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url(/shape-01.png)] bg-contain bg-no-repeat bg-left-top" />
              <div className="absolute top-0 right-0 w-full h-full bg-[url(/shape.png)] bg-contain bg-no-repeat bg-right-top" />
              <div className="relative w-full max-w-2xl h-auto aspect-square bg-[url(/banner-01.png)] bg-contain bg-no-repeat bg-center" />

              <div className="absolute top-1/4 left-1/4">
                <div className="relative w-40 h-40 rounded-full border border-solid border-[#ffffff14] backdrop-blur-[10.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.21)_0%,rgba(125,124,134,0.08)_100%)]">
                  {circularTextLetters.map((letter, index) => (
                    <div
                      key={index}
                      className={`absolute ${letter.top} ${letter.left} ${letter.width} h-auto flex items-center justify-center ${letter.rotation} font-light text-white text-sm text-center tracking-normal leading-normal`}
                    >
                      {letter.char}
                    </div>
                  ))}

                  <div className="flex w-20 h-20 items-center justify-center p-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-solid border-[#ffffff14]">
                    <div className="flex flex-col w-full h-full items-center justify-center relative overflow-hidden">
                      <div className="relative w-full h-full">
                        <img
                          className="absolute w-full h-full top-0 left-0"
                          alt="Vector"
                          src="/vector-1.svg"
                        />
                        <img
                          className="absolute w-3/5 h-3/5 top-1/5 left-1/5"
                          alt="Vector"
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <img className="w-20 h-auto" alt="Frame" src="/frame-179.svg" />
        </div>
      </div>
    </section>
  );
};
