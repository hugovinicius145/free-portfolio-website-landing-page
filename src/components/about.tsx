import NextImage from "next/image";

export function About() {
  return (
    <section className="w-full" id="about">
      <div className="max-w-6xl mx-auto px-4 md:px-1.5 pb-36 mt-8 flex flex-col md:flex-row justify-center md:justify-between items-center gap-14">
        <div className="flex flex-col w-full md:w-1/2 space-y-6 text-center md:text-start items-center md:items-start">
          <h2 className="font-bold text-2xl md:text-6xl">
            Let&apos;s get know <br />
            about me closer
          </h2>
          <p className="text-lg text-gray-400 font-mono">
            Aaronn is a New York-based visual designer focusing on branding and visual identity. Her portfolio showcases her wide range of work, spanning books, posters and web design.
          </p>
          <div className="pt-12">
            <button className="bg-brand py-4 md:py-6 px-6 md:px-10 font-semibold uppercase text-base rounded-3xl flex items-center gap-3 ">
              Discover More About Me
            </button>
          </div>
        </div>
        <NextImage
          src={'https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1687474767/examples/AARONN%20%7C%20Free%20Portfolio%20Website%20Landing%20Page/Rectangle-361_mguc1s.png'}
          alt="About me"
          width={454}
          height={506}
        />
      </div>
      <NextImage
        src={'https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1687474767/examples/AARONN%20%7C%20Free%20Portfolio%20Website%20Landing%20Page/Vector-6_hepjid.png'}
        alt="vector"
        width={518}
        height={274}
        className="absolute top-3/4 left-0"
      />
    </section>
  );
}