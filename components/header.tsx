import Image from "next/image";
import Link from "next/link";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#destinations", label: "Destinations" },
  { href: "#gallery", label: "Gallery" },
  { href: "#journal", label: "Journal" },
  { href: "#care", label: "Care" },
];

export function Header() {
  return (
    <header className="nav-bar flex flex-wrap items-center justify-between gap-y-3 py-5 pr-8 pl-6 lg:pt-7 lg:pr-10 lg:pl-10">
      <Link
        href="/"
        className="nav-brand flex items-center gap-3 text-ink"
        aria-label="Handpoke Travels home"
      >
        <Image
          src="/images/logo.png"
          alt=""
          width={845}
          height={827}
          className="h-12 w-auto object-contain md:h-14"
        />
        <span className="flex flex-col font-serif text-[13px] leading-[1.2] font-medium tracking-[0.4em] uppercase md:text-[15px]">
          <span>Handpoke</span>
          <span>Travels</span>
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
        <span className="underline decoration-1 underline-offset-4 transition-colors group-hover:decoration-transparent">
          Book your experience
        </span>
        <Image
          src="/images/compass-brown.png"
          alt=""
          width={849}
          height={907}
          className="h-4 w-auto object-contain transition-transform duration-500 group-hover:rotate-45"
        />
      </Link>
    </header>
  );
}
