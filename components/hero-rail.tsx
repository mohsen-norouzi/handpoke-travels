import Image from "next/image";

export function HeroRail() {
  return (
    <aside
      className="hero-rail pointer-events-none absolute top-1/2 left-[14px] z-20 flex h-[min(56vh,520px)] w-5 -translate-y-1/2 flex-col items-center md:left-[20px] lg:left-[26px]"
      aria-hidden="true"
    >
      <span className="rail-top origin-top block w-px flex-[0.34]" />
      <span className="h-3.5 shrink-0" />
      <span className="rail-dot size-[7px] shrink-0 rounded-full bg-[#a67c52]" />
      <span className="h-3.5 shrink-0" />
      <span className="rail-mid origin-top block w-px flex-1" />
      <span className="h-3.5 shrink-0" />
      <Image
        src="/images/compass.png"
        alt=""
        width={22}
        height={24}
        className="rail-star h-auto w-[13px] shrink-0"
      />
    </aside>
  );
}
