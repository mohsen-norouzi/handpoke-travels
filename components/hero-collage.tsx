import Image from "next/image";
import { BotanicalArt, FourPointStar, RoughCircleFrame, SunEyeLogo } from "./icons";

export function HeroCollage() {
  return (
    <div className="hero-collage relative mx-auto h-[min(78vh,720px)] w-full max-w-[720px] lg:mx-0 lg:h-full lg:max-w-none">
      <div className="watercolor watercolor-a" />
      <div className="watercolor watercolor-b" />

      <div className="terracotta parallax-med pointer-events-none absolute left-[4%] top-[8%] z-0 size-[28%] rounded-full bg-terracotta md:left-[6%] md:top-[10%] md:size-[210px] lg:left-[5%] lg:size-[23%]" />

      <div className="circle-stage absolute left-[6%] top-[12%] z-10 aspect-square w-[72%] md:left-[8%] md:w-[68%] lg:w-[62%]">
        <div className="circle-photo relative size-full overflow-hidden rounded-full">
          <Image
            src="/images/hero-tattoo.jpg"
            alt="A handpoke tattoo of a botanical branch being inked onto skin"
            fill
            priority
            sizes="(max-width: 1024px) 70vw, 42vw"
            className="circle-photo-img object-cover object-[center_42%] scale-110"
          />
        </div>
        <RoughCircleFrame className="circle-frame pointer-events-none absolute -inset-[3.2%] text-ink" />
      </div>

      <div className="polaroid parallax-fast absolute right-[3%] top-[15%] z-20 w-[36%] max-w-[210px] md:right-[6%] md:top-[17%] md:w-[200px] lg:right-[7%]">
        <div className="relative rotate-[5.5deg] bg-[#f3ebe1] p-[7px] pb-9 shadow-[0_18px_40px_rgba(40,24,10,0.16)]">
          <div className="tape tape-left" />
          <div className="tape tape-right" />
          <div className="relative aspect-[3/4] overflow-hidden bg-[#cbb9a4]">
            <Image
              src="/images/hero-landscape.jpg"
              alt="Misty mountain range in warm vintage tones"
              fill
              sizes="210px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="parallax-slow pointer-events-none absolute right-[-2%] top-[6%] z-[5] w-[40%] text-ink/50 md:right-[0%] md:top-[4%] md:w-[210px] lg:w-[30%]">
        <BotanicalArt className="h-auto w-full" />
      </div>

      <div className="torn-note parallax-fast absolute bottom-[6%] left-[16%] z-20 w-[50%] max-w-[280px] md:left-[20%] md:w-[260px]">
        <div className="-rotate-[3.5deg] px-6 pb-5 pt-7">
          <p className="font-serif text-[13px] leading-relaxed tracking-[0.04em] text-ink/90 md:text-[14px]">
            Timeless by nature,
            <br />
            etched by hand.
          </p>
          <div className="mt-4 flex items-center gap-2 text-ink/70">
            <span className="flex size-9 items-center justify-center rounded-full border border-ink/40">
              <SunEyeLogo className="size-5" />
            </span>
            <FourPointStar className="size-2.5" />
            <span className="h-px w-10 bg-ink/30" />
            <span className="w-8 border-t border-dashed border-ink/35" />
          </div>
        </div>
      </div>

      <FourPointStar className="star star-a absolute left-[2%] top-[42%] size-3 text-ink/70" />
      <FourPointStar className="star star-b absolute right-[36%] top-[8%] size-2.5 text-ink/50" />
      <FourPointStar className="star star-c absolute right-[6%] bottom-[28%] size-2 text-ink/45" />
      <span className="ink-dot absolute left-[48%] top-[10%] size-1 rounded-full bg-ink/50" />
      <span className="ink-dot absolute right-[28%] bottom-[18%] size-[3px] rounded-full bg-ink/40" />
      <span className="ink-dot absolute bottom-[22%] left-[8%] size-[2px] rounded-full bg-ink/35" />
    </div>
  );
}
