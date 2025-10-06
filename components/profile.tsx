import React from "react";
import Marquee from "./marquee";
import MarqueeContent from "./marquee-content";
import TimeLine from "./timeline";

const Profile = () => {
  return (
    <section
      id="about"
      className="relative px-10 flex flex-col justify-between bg-accent -mt-1"
    >
      <div className="text-center max-sm:hidden">
        <h1 className="text-2xl font-semibold ">ALEN JOY</h1>
        <p className="font-bold">Fullstack Developer</p>

        <p className="mt-4 mx-52 text-justify ">
          Hi, I'm a Fullstack Developer with a strong foundation in building
          scalable web applications. Specializing in Next.js and React, I craft
          dynamic user interfaces and seamless experiences. On the backend, I
          leverage Node.js to develop efficient APIs. My toolkit includes
          SuperTokens, Tailwind CSS, Astro, ShadCN UI, and Mantine—helping me
          ship accessible, responsive products. I enjoy solving complex problems
          and continuously refine my skills with modern best practices.
        </p>
      </div>

      <TimeLine />

      <div className="py-4">
        <p className="text-sm text-center uppercase pb-6 underline decoration-wavy font-bold accent">
          Known Programming Languages
        </p>
        <div className="flex overflow-hidden group mask-side">
          <Marquee pauseOnHover>
            <slot>
              <MarqueeContent />
            </slot>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Profile;
