import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <section className="w-full" id="projects">
      <div className="max-w-6xl mx-auto px-4 md:px-1.5 pb-36 mt-8 flex flex-col justify-center items-center space-y-10 md:space-y-14">
        <h2 className="font-bold text-2xl md:text-6xl">
          My Projects Highlight
        </h2>
        <div>
          <button className="rounded-3xl border border-brand py-4 px-9 font-bold uppercase gap-3 flex hover:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
            Explore more
            <ArrowLongRightIcon width={24} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <ProjectCard
            photoUrl="https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1687474790/examples/AARONN%20%7C%20Free%20Portfolio%20Website%20Landing%20Page/Img_dcjs4p.png"
            title="Brand Journey Improvements"
            client="Organc"
            work="Branding Logo Design"
          />
          <ProjectCard
            photoUrl="https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1687474790/examples/AARONN%20%7C%20Free%20Portfolio%20Website%20Landing%20Page/Img-1_oyj6lh.png"
            title="Brand Journey Improvements"
            client="Organc"
            work="Branding Logo Design"
          />
          <ProjectCard
            photoUrl="https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1687474790/examples/AARONN%20%7C%20Free%20Portfolio%20Website%20Landing%20Page/Img-2_agsahu.png"
            title="Brand Journey Improvements"
            client="Organc"
            work="Branding Logo Design"
          />
          <ProjectCard
            photoUrl="https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1687474790/examples/AARONN%20%7C%20Free%20Portfolio%20Website%20Landing%20Page/Img-3_bnxsfr.png"
            title="Brand Journey Improvements"
            client="Organc"
            work="Branding Logo Design"
          />
        </div>
      </div>
    </section>
  );
}