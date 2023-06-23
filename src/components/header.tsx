import NextLink from "next/link";

import { Logo } from "./logo";

export function Header() {
  return (
    <header className="w-full">
      <div className="max-w-6xl mx-auto px-1.5 mt-8 flex justify-center md:justify-between items-center">
        <Logo />
        <div className="hidden md:flex md:flex-row items-center gap-11 uppercase font-medium text-sm">
          <NextLink href={'/'} passHref>
            Home
          </NextLink>
          <NextLink href={'#about'} scroll>
            About me
          </NextLink>
          <NextLink href={'#projects'} scroll>
            My works
          </NextLink>
          <NextLink href={'#contact'} scroll>
            <button className="rounded-3xl border py-4 px-9 font-bold uppercase hover:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
              Contact
            </button>
          </NextLink>
        </div>
      </div>
    </header>
  );
}