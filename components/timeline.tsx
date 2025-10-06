import Image from "next/image";
import React from "react";
import sololeveling from "../public/sololeveling.png";
import Link from "next/link";

const TimeLine = () => {
  return (
    <section
      id="timeline"
      className="relative bg-inherit"
      aria-label="Career timeline"
    >
      <div className="container max-w-5xl sm:py-12 mx-auto">
        <div className="grid gap-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0">
              <h2 className="text-2xl font-bold md:text-4xl accent">
                Timeline
              </h2>
              <span className="text-sm font-bold tracking-wider uppercase accent">
                Career Progression
              </span>
              <Image
                src={sololeveling}
                alt="decorative"
                width={300}
                height={900}
                loading={"lazy"}
                className="hidden md:block"
              />
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
              {[
                {
                  title: "Work Experience",
                  data: [
                    {
                      sub: "RateUp",
                      from: {
                        date: "Aug 2023",
                      },
                      to: {
                        date: "present",
                      },
                      link: "https://rateup.app",
                      desc: "As a Fullstack Developer at RateUp, I lead a small team in building scalable apps with Next.js and Fastify, enhancing user engagement via WhatsApp Flow, and optimizing authentication with SuperTokens, while developing digital menus using Mantine.Use AWS S3 for file storage and leverage REST APIs along with React Query for data management",
                      footer: ["nextjs", "fastify", "mantine"],
                    },
                    {
                      sub: "Innovature software labs",
                      from: {
                        date: "Jul 2022",
                      },
                      to: {
                        date: "Aug 2023",
                      },
                      link: "https://innovature.ai/",
                      desc: "At Innovature Software Labs, I worked on POC projects like an NFT marketplace and FAQ AI bot using React, Node.js, and Java Spring Boot, focusing on innovative solutions with ShadCN UI for internal and client-facing applications.",
                      footer: ["react", "nodejs", "springboot"],
                    },
                  ],
                },
                {
                  title: "Education",
                  data: [
                    {
                      sub: "MES college Nedumkandam",
                      from: {
                        date: "Jun 2019",
                      },
                      to: {
                        date: "Mar 2022",
                      },
                      link: "https://meskerala.com/mes-college-nedumkandam/",
                      desc: "I completed my Bachelor of Computer Applications (BCA) at MG University in Kerala, where I gained a solid foundation in computer science and programming. My studies equipped me with essential skills in software development, database management, and web technologies, fostering my passion for building innovative solutions.",
                      footer: ["bca"],
                    },
                  ],
                },
              ].map((value, idx) => (
                <div key={idx} className="space-y-4">
                  {value.data.map(({ link, sub, to, from, desc, footer }) => (
                    <div
                      key={link}
                      className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-1"
                    >
                      <Link
                        href={link}
                        target="_blank"
                        className="flex w-fit hover:underline decoration-wavy"
                      >
                        <h3 className="text-xl font-semibold tracking-wide capitalize accent">
                          {sub}
                        </h3>
                      </Link>
                      <div className="flex gap-1 text-xs tracking-wide uppercase accent">
                        <time>{from.date}</time>-<time>{to.date}</time>
                      </div>
                      <p className="mt-3">{desc}</p>
                      <div className="flex gap-2">
                        {footer?.map((data) => (
                          <span
                            key={data}
                            className="px-1 rounded-md min-w-10 text-center text-white  uppercase text-sm dark:bg-gray-600 bg-gray-500"
                          >
                            {data}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
