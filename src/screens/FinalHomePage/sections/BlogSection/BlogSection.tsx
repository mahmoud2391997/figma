import { CalendarIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const blogPosts = [
  {
    id: 1,
    backgroundImage: "url(..//frame-235-2.png)",
    backgroundTitle: "Why Wholesale E - Stores Should Make Sell",
    title: "Know Your E-Commerce Search Query Types?",
    description:
      "Know Your E-commerce Search Query Types? 41% of E-commerce Sites Are Getting It Wrong",
    author: "Techtlk",
    authorAvatar: "/489cb685f5024e6d0af1e98a0d57132d-1-1.png",
    date: "Jan 29, 2025",
    bgColor: "bg-[#086ad80d]",
    borderColor: "border-[#086ad81a]",
  },
  {
    id: 2,
    backgroundImage: "url(..//frame-235-3.png)",
    backgroundTitle: "Why Wholesale E - Stores Should Make Sell",
    title: "Why Wholesale E - Stores Should Make Sell",
    description:
      "Know Your E-commerce Search Query Types? 41% of E-commerce Sites Are Getting It Wrong",
    author: "Techtlk",
    authorAvatar: "/489cb685f5024e6d0af1e98a0d57132d-1-1.png",
    date: "Jan 29, 2025",
    bgColor: "bg-[#f5f6f7]",
    borderColor: "border-[#3672ff1f]",
  },
];

export const BlogSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-5 pt-[110px] pb-[140px] px-[305px]">
      <header className="inline-flex flex-col items-center gap-2.5 pt-0 pb-[25px] px-0">
        <h2 className="w-fit mt-[-1.00px] font-titel font-[number:var(--titel-font-weight)] text-secondary-color text-[length:var(--titel-font-size)] tracking-[var(--titel-letter-spacing)] leading-[var(--titel-line-height)] whitespace-nowrap [font-style:var(--titel-font-style)]">
          Latest News &amp; Articles
        </h2>
      </header>

      <div className="inline-flex flex-col items-center gap-2.5 pt-0 pb-10 px-0">
        <div className="inline-flex items-center gap-[30px]">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className={`inline-flex flex-col items-center justify-center ${post.bgColor} rounded-[10px] overflow-hidden border border-solid ${post.borderColor}`}
            >
              <div
                className="inline-flex flex-col items-start gap-2.5 px-[30px] py-[164.5px] bg-cover bg-center"
                style={{ background: post.backgroundImage }}
              >
                <div className="w-[580px] mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-bold text-transparent text-2xl tracking-[0] leading-[34px]">
                  {post.backgroundTitle}
                </div>
              </div>

              <CardContent className="inline-flex flex-col items-start gap-[1.33px] p-[30px]">
                <div className="inline-flex items-center gap-[15px] pl-0 pr-[89px] pt-0 pb-5">
                  <div className="inline-flex items-center gap-2.5">
                    <img
                      className="w-[22px] h-[22px] rounded-[70px] object-cover"
                      alt="Author avatar"
                      src={post.authorAvatar}
                    />
                    <div className="w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-normal text-[#585b6f] text-[15px] tracking-[0] leading-[27px] whitespace-nowrap">
                      {post.author}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2.5">
                    <CalendarIcon className="w-4 h-4 text-[#585b6f]" />
                    <div className="w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-normal text-[#585b6f] text-[15px] tracking-[0] leading-[27px] whitespace-nowrap">
                      {post.date}
                    </div>
                  </div>
                </div>

                <h3 className="w-[580px] [font-family:'Space_Grotesk',Helvetica] font-bold text-secondary-color text-2xl tracking-[0] leading-[34px]">
                  {post.title}
                </h3>

                <div className="inline-flex items-center justify-center gap-2.5 pt-2.5 pb-[26px] px-0">
                  <p className="mt-[-1.00px] font-normal text-[#585b6f] text-[17px] leading-[25.2px] w-[580px] [font-family:'Space_Grotesk',Helvetica] tracking-[0]">
                    {post.description}
                  </p>
                </div>

                <Button className="inline-flex items-center justify-center gap-2.5 px-[13px] py-2.5 h-auto rounded-[5px] bg-[linear-gradient(180deg,rgba(43,77,255,1)_0%,rgba(3,73,239,1)_100%)] hover:opacity-90">
                  <span className="w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-medium text-white text-[17px] tracking-[0] leading-[normal]">
                    Read More
                  </span>
                  <img
                    className="w-[18px] h-[18px]"
                    alt="Arrow icon"
                    src="/component-11.svg"
                  />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="inline-flex items-center justify-center gap-5">
        <Button className="inline-flex items-center justify-center gap-2.5 px-[28.5px] py-[19px] h-auto rounded-[5px] bg-[linear-gradient(180deg,rgba(43,77,255,1)_0%,rgba(3,73,239,1)_100%)] hover:opacity-90">
          <span className="w-fit mt-[-1.00px] [font-family:'Space_Grotesk',Helvetica] font-semibold text-white text-[17px] tracking-[0] leading-[normal] whitespace-nowrap">
            Discover More
          </span>
          <img
            className="w-[18px] h-[18px]"
            alt="Arrow icon"
            src="/component-11.svg"
          />
        </Button>

        <img
          className="w-[977px] h-px object-cover"
          alt="Divider line"
          src="/line-3.svg"
        />

        <div className="inline-flex items-center gap-2.5">
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 p-0 hover:bg-transparent"
          >
            <img className="w-10 h-10" alt="Previous" src="/component-19.svg" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 p-0 hover:bg-transparent"
          >
            <img className="w-10 h-10" alt="Next" src="/component-20.svg" />
          </Button>
        </div>
      </div>
    </section>
  );
};
