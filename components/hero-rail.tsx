import Image from "next/image";

export function HeroRail() {
  return (
    <aside
      className="hero-rail hidden h-[min(56vh,520px)] w-8 shrink-0 flex-col items-center self-center md:flex lg:w-10"
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
