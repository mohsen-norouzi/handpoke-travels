import Image from "next/image";
import { RoughCircleFrame } from "./icons";

export function HeroCollage() {
  return (
    <div className="hero-collage grid h-full min-h-0 w-full grid-cols-1 grid-rows-1">
      <div className="terracotta parallax-med pointer-events-none col-start-1 row-start-1 ml-[6%] mt-[10%] size-[22%] rounded-full bg-terracotta" />

      <div className="circle-stage col-start-1 row-start-1 ml-[8%] mt-[12%] aspect-square w-[min(62%,72cqh)] min-h-0">
        <div className="grid size-full">
          <div className="circle-photo col-start-1 row-start-1 overflow-hidden rounded-full">
            <Image
              src="/images/hero-tattoo.jpg"
              alt="A handpoke tattoo of a botanical branch being inked onto skin"
              width={800}
              height={800}
              priority
              className="circle-photo-img size-full object-cover object-[center_42%] scale-110"
            />
          </div>
          <RoughCircleFrame className="circle-frame pointer-events-none col-start-1 row-start-1 -m-[3%] size-[106%] text-ink" />
        </div>
      </div>

      <div className="parallax-slow pointer-events-none col-start-1 row-start-1 -mr-2 ml-auto h-full min-h-0 w-[34%]">
        <Image
          src="/images/flower.png"
          alt=""
          width={565}
          height={1627}
          className="h-full w-full object-contain object-top-right brightness-0 opacity-55"
        />
      </div>

      <div className="polaroid parallax-fast col-start-1 row-start-1 mr-[4%] ml-auto mt-[14%] w-[min(38%,42cqh)] max-w-[220px] min-h-0">
        <div className="grid rotate-[5deg] drop-shadow-[0_16px_28px_rgba(40,24,10,0.18)]">
          <div className="col-start-1 row-start-1 px-[6%] pt-[10%] pb-[9%]">
            <Image
              src="/images/hero-landscape.jpg"
              alt="Misty mountain range in warm vintage tones"
              width={600}
              height={800}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <Image
            src="/images/frame.png"
            alt=""
            width={906}
            height={1268}
            className="pointer-events-none col-start-1 row-start-1 h-auto w-full"
          />
        </div>
      </div>

      <div className="torn-note parallax-fast col-start-1 row-start-1 mb-[4%] ml-[12%] mt-auto w-[min(52%,50cqh)] max-w-[280px] min-h-0">
        <div className="grid -rotate-[3.5deg]">
          <Image
            src="/images/paper.png"
            alt=""
            width={962}
            height={1163}
            className="col-start-1 row-start-1 h-auto w-full drop-shadow-[0_12px_20px_rgba(40,24,10,0.12)]"
          />
          <div className="col-start-1 row-start-1 flex flex-col p-[22%_16%_18%_20%]">
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
              className="mt-auto h-auto w-[88%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
