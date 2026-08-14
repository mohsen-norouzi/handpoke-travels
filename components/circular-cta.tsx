import Image from "next/image";

export function CircularCta() {
  const label = "DISCOVER THE JOURNEY • DISCOVER THE JOURNEY • ";

  return (
    <a
      href="#destinations"
      className="circular-cta group grid size-[118px] place-items-center text-ink md:size-[132px]"
      aria-label="Discover the journey"
    >
      <svg
        viewBox="0 0 140 140"
        className="circular-cta-ring col-start-1 row-start-1 size-full origin-center"
        aria-hidden="true"
      >
        <defs>
          <path
            id="discover-circle"
            d="M70,70 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0"
          />
        </defs>
        <text
          fill="currentColor"
          style={{
            fontSize: "8.6px",
            letterSpacing: "2.4px",
            fontFamily: "var(--font-cormorant), Georgia, serif",
          }}
        >
          <textPath href="#discover-circle">{label}</textPath>
        </text>
      </svg>
      <Image
        src="/images/compass.png"
        alt=""
        width={849}
        height={907}
        className="col-start-1 row-start-1 h-14 w-auto object-contain transition-transform duration-700 group-hover:rotate-45 md:h-16"
      />
    </a>
  );
}
