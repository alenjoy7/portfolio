import React from "react";
import Image from "next/image";
import Experience from "./experience";
import heroImage from "../public/hero-img-text.png";
import LandingImage from "./landing-image";

const Landing = () => {
  return (
    <section className="relative font-chakie flex flex-col justify-between">
      <div className="relative">
        <div className="container mx-auto px-6 py-20 md:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeIn">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1]">
                Alen Joy
              </h1>
              <div className="flex items-center gap-3">
                <span className="text-lg font-semibold text-accent">
                  Fullstack Developer
                </span>
                <span className="hidden sm:inline-block">•</span>
                <span className="inline-flex items-center gap-2">
                  <Experience />
                </span>
              </div>
              <p className="max-w-xl text-base md:text-lg">
                I'm a Fullstack Developer specializing in Next.js, React, and
                Node.js. I build scalable web apps with modern tools like
                Tailwind CSS and SuperTokens,betterauth focusing on clean, accessible user
                experiences.
              </p>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <Image
                src={heroImage}
                alt="Hero graphic"
                loading={"eager"}
                decoding="async"
                width={320}
                className="w-[min(50vw,320px)] md:w-[280px] lg:w-[320px] animate-fadeInImage"
              />
            </div>
          </div>
        </div>
      </div>

      <LandingImage className={"fill-accent"} />
    </section>
  );
};

export default Landing;
