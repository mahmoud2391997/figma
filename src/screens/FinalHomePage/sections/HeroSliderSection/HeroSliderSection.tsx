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
    <section className="relative w-full flex justify-center [background:url(../background.png)_50%_50%_/_cover]">
      <div className="w-full max-w-[1920px] relative [background:url(../background.png)_50%_50%_/_cover]">
        <div className="container mx-auto px-[130px] py-[288px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3.5">
                <div className="w-[47px] h-[13px]" />

                <h1 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[80px] tracking-[-1.00px] leading-[90px]">
                  Enterprise AI-Powered eCommerce Development Company
                </h1>
              </div>

              <div className="py-2.5">
                <p className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#ffffffb5] text-[17px] tracking-[0] leading-[27px] max-w-[420px]">
                  Delivering scalable, secure, and intelligent eCommerce
                  solutions for enterprises, B2B, and global brands.
                </p>
              </div>

              <Button className="w-fit h-auto px-[25px] py-[13px] bg-primary-color rounded-[5px] [font-family:'Space_Grotesk',Helvetica] font-semibold text-white text-[17px] tracking-[0.09px] leading-[22.8px]">
                Let&#39;s Redefine eCommerce
              </Button>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute top-0 left-0 max-w-[293px] w-[293px] h-[258px] opacity-20 bg-[url(/shape-01.png)] bg-cover bg-[50%_50%]" />

              <div className="absolute top-0 right-0 max-w-[179px] w-[179px] h-[195px] bg-[url(/shape.png)] bg-cover bg-[50%_50%]" />

              <div className="relative max-w-[739px] w-[739px] h-[689px] bg-[url(/banner-01.png)] bg-cover bg-[50%_50%]" />

              <div className="absolute top-0 left-0">
                <div className="relative w-40 h-40 rounded-[80px] border border-solid border-[#ffffff14] backdrop-blur-[10.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10.5px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.21)_0%,rgba(125,124,134,0.08)_100%)]">
                  {circularTextLetters.map((letter, index) => (
                    <div
                      key={index}
                      className={`absolute ${letter.top} ${letter.left} ${letter.width} h-[27px] flex items-center justify-center ${letter.rotation} [font-family:'Space_Grotesk',Helvetica] font-light text-white text-base text-center tracking-[0] leading-[27px] whitespace-nowrap`}
                    >
                      {letter.char}
                    </div>
                  ))}

                  <div className="flex w-20 h-20 items-center justify-center p-[21px] absolute top-[calc(50.00%_-_40px)] left-[calc(50.00%_-_40px)] rounded-[40px] border border-solid border-[#ffffff14]">
                    <div className="flex flex-col max-w-20 h-[38px] items-start relative flex-1 grow">
                      <div className="flex flex-col w-[38px] h-[38px] items-center justify-center relative overflow-hidden">
                        <div className="relative w-[39.15px] h-[38px] ml-[-0.58px] mr-[-0.58px]">
                          <img
                            className="absolute w-[93.84%] h-[96.69%] top-0 left-[2.50%]"
                            alt="Vector"
                            src="/vector-1.svg"
                          />

                          <img
                            className="absolute w-[60.03%] h-[61.85%] top-[14.53%] left-[16.32%]"
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
        </div>

        <div className="absolute bottom-[49px] left-[calc(50.00%_-_35px)]">
          <img className="w-[70px] h-5" alt="Frame" src="/frame-179.svg" />
        </div>
      </div>
    </section>
  );
};
