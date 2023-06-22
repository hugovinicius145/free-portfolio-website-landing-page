import NextImage from "next/image";
import NextLink from "next/link";

export function Logo() {
  return (
    <NextLink href={'/'} passHref>
      <NextImage
        src={'https://res.cloudinary.com/hl-solu-es-digitais/image/upload/v1687474766/examples/AARONN%20%7C%20Free%20Portfolio%20Website%20Landing%20Page/Brand-logo_n0hi1b.png'}
        alt="Logo"
        width={125}
        height={28}
      />
    </NextLink>
  );
}