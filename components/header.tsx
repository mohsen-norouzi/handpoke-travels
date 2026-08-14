import Image from "next/image";
import Link from "next/link";
import { FourPointStar } from "./icons";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#destinations", label: "Destinations" },
  { href: "#gallery", label: "Gallery" },
  { href: "#journal", label: "Journal" },
  { href: "#care", label: "Care" },
];

export function Header() {
  return (
    <header className="nav-bar relative z-30 flex flex-wrap items-center justify-between gap-y-3 py-5 pr-[3.5vw] pl-10 lg:pt-7 lg:pl-14">
      <Link
        href="/"
        className="nav-brand flex items-center gap-2.5 text-ink"
        aria-label="Handpoke Travels home"
      >
        <Image
          src="/images/logo.png"
          alt=""
          width={32}
          height={31}
          className="size-[26px] object-contain"
        />
        <span className="font-serif text-[11px] font-medium tracking-[0.34em] uppercase">
          Handpoke Travels
        </span>
      </Link>

      <nav
        className="nav-links order-3 flex w-full items-center justify-center gap-5 md:order-none md:w-auto md:gap-8 xl:gap-10"
        aria-label="Primary"
      >
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-item font-serif text-[10px] font-medium tracking-[0.28em] uppercase text-ink/80 transition-colors hover:text-ink md:text-[11px]"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link
        href="#book"
        className="nav-cta group flex items-center gap-3 font-serif text-[10px] font-medium tracking-[0.26em] uppercase text-ink md:text-[11px]"
      >
        <span className="relative">
          Book your experience
          <span className="absolute inset-x-0 -bottom-[3px] h-px origin-left bg-ink transition-transform duration-500 group-hover:scale-x-0" />
        </span>
        <FourPointStar className="size-[11px] transition-transform duration-500 group-hover:rotate-45" />
      </Link>
    </header>
  );
}
