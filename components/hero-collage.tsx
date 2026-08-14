import Image from "next/image";
import { FourPointStar, RoughCircleFrame } from "./icons";

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

      <div className="parallax-slow pointer-events-none absolute right-[-4%] top-[2%] z-[5] w-[42%] md:right-[-1%] md:top-[0%] md:w-[230px] lg:w-[32%]">
        <Image
          src="/images/flower.png"
          alt=""
          width={565}
          height={1627}
          className="h-auto w-full brightness-0 opacity-55"
        />
      </div>

      <div className="polaroid parallax-fast absolute right-[2%] top-[14%] z-20 w-[40%] max-w-[230px] md:right-[5%] md:top-[16%] md:w-[220px] lg:right-[6%]">
        <div className="relative aspect-[906/1268] rotate-[5deg] drop-shadow-[0_16px_28px_rgba(40,24,10,0.18)]">
          <div className="absolute inset-[10%_6.2%_8.8%_5.6%] overflow-hidden bg-[#cbb9a4]">
            <Image
              src="/images/hero-landscape.jpg"
              alt="Misty mountain range in warm vintage tones"
              fill
              sizes="230px"
              className="object-cover"
            />
          </div>
          <Image
            src="/images/frame.png"
            alt=""
            fill
            sizes="230px"
            className="pointer-events-none object-contain"
          />
        </div>
      </div>

      <div className="torn-note parallax-fast absolute bottom-[4%] left-[12%] z-20 w-[54%] max-w-[300px] md:left-[16%] md:w-[280px]">
        <div className="relative -rotate-[3.5deg]">
          <Image
            src="/images/paper.png"
            alt=""
            width={962}
            height={1163}
            className="h-auto w-full drop-shadow-[0_12px_20px_rgba(40,24,10,0.12)]"
          />
          <div className="absolute inset-[22%_16%_18%_20%] flex flex-col">
            <p className="font-sans text-[11px] leading-relaxed tracking-[0.14em] text-ink/85 uppercase md:text-[12px]">
              Timeless by nature.
              <br />
              Etched by hand.
            </p>
            <Image
              src="/images/stamp.png"
              alt="Handpoke Travels stamp"
              width={1137}
              height={695}
              className="mt-auto w-[88%] h-auto"
            />
          </div>
        </div>
      </div>

      <Image
        src="/images/compass.png"
        alt=""
        width={22}
        height={24}
        className="star star-a absolute left-[2%] top-[42%] w-3.5 h-auto"
      />
      <FourPointStar className="star star-b absolute right-[36%] top-[8%] size-2.5 text-ink/50" />
      <FourPointStar className="star star-c absolute right-[6%] bottom-[28%] size-2 text-ink/45" />
      <span className="ink-dot absolute left-[48%] top-[10%] size-1 rounded-full bg-ink/50" />
      <span className="ink-dot absolute right-[28%] bottom-[18%] size-[3px] rounded-full bg-ink/40" />
      <span className="ink-dot absolute bottom-[22%] left-[8%] size-[2px] rounded-full bg-ink/35" />
    </div>
  );
}
