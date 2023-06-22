import NextImage from "next/image";

export function Testimonial() {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4 md:px-1.5 pb-24 md:pb-36 mt-8 flex flex-col md:flex-row justify-center md:justify-between items-center gap-14">
        <div className="flex flex-col space-y-8 md:space-y-12 w-full md:w-3/4">
          <h2 className="font-bold text-2xl md:text-6xl">
            Testimonial
          </h2>
          <p className="text-lg text-gray-400 font-mono">
            “Aaronn was fantastic to work with from start to finish. We were looking for a simple, stand-out logo and he delivered. I tried designing the logo myself thinking I wouldn’t need to pay the money for a professional graphic designer but I was very wrong. Working with Aaronn was worth every penny and was surprisingly affordable! I remember him saying simplicity is key to a successful logo and boy he was right. I can’t thank Aaronn enough for his effort and professionalism. I would recommend him to anyone looking for a design!”
          </p>
          <h3 className="font-bold text-lg md:text-2xl">
            -Martin lee
          </h3>
        </div>
        <NextImage
          src={'https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1687474766/examples/AARONN%20%7C%20Free%20Portfolio%20Website%20Landing%20Page/aspas_hzxfqq.png'}
          alt="''"
          width={199}
          height={83}
          className="hidden md:block self-start"
        />
      </div>
    </section>
  );
}