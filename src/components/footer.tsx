import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-6xl mx-auto px-6 md:px-1.5 py-24 flex flex-col justify-center items-center text-center space-y-16">
        <div className="flex flex-col space-y-6 text-center">
          <span className="text-brand font-bold text-lg md:text-2xl">
            Get in Touch With Us
          </span>
          <h2 className="font-bold text-2xl md:text-6xl" id="contact">
            info@aaronn.com
          </h2>
        </div>
        <div className="w-full flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center pt-6 md:pt-12">
          <Logo />
          <div className="flex flex-col space-y-2 font-bold text-lg md:text-2xl text-start">
            <span>Street Avenue 21, CA</span>
            <span>0-8-00-888-000</span>
          </div>
          <div className="flex flex-col space-y-2 font-bold text-lg md:text-2xl text-start">
            <span>+9 0283353</span>
          </div>
        </div>
        <div className="w-full h-px border border-brand"></div>
        <h3 className="font-bold text-lg md:text-2xl">
          © 2023. Ideapeel. All rights reserved.
        </h3>
      </div>
    </footer>
  );
}