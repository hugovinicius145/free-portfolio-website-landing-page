import NextImage from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

export function Hero() {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4 md:px-1.5 pt-24 pb-20 md:py-48 flex flex-col justify-center items-center space-y-12 md:space-y-24">
        <h1 className="text-3xl md:text-7xl font-bold text-center">
          Adaptive Logo Design <br />
          for Your Brand
        </h1>
        <button className="bg-brand py-4 md:py-6 px-6 md:px-10 font-bold uppercase text-sm rounded-3xl flex items-center gap-3 ">
          Explore works
          <ArrowLongRightIcon width={24} />
        </button>
      </div>
      <NextImage
        src={'https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1687474767/examples/AARONN%20%7C%20Free%20Portfolio%20Website%20Landing%20Page/Vector-8_ptepmv.png'}
        alt="vector"
        width={518}
        height={274}
        className="absolute top-12 left-0 md:top-36 md:left-1/2"
        priority
      />
    </section>
  );
}