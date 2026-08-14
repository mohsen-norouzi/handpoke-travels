import Image from "next/image";
import { SparkleStar, TerracottaDrop } from "./icons";

export function HeroCollage() {
  return (
    <div className="hero-collage grid h-full min-h-0 w-full grid-cols-1 grid-rows-1">
      <div className="terracotta parallax-med pointer-events-none col-start-1 row-start-1 ml-[-25%] mt-[0%] h-[28%] w-[22%] rotate-[-18deg] opacity-[0.62] text-terracotta">
        <TerracottaDrop className="size-full" />
      </div>

      <div className="parallax-slow pointer-events-none col-start-1 row-start-1 mt-[62.5%] ml-[-62.5%] w-[34%] min-h-0 rotate-[-18.5deg] opacity-[0.72] mix-blend-multiply">
        <Image
          src="/images/artline.png"
          alt=""
          width={1122}
          height={1402}
          className="h-auto w-full"
        />
      </div>

      <div className="circle-stage col-start-1 row-start-1 ml-[-25.5%] mt-[-2.5%] aspect-square w-[105.5%] min-h-0" data-cursor-lens>
        <div className="circle-stamp circle-frame grid size-full rotate-[16deg]">
          <div className="circle-photo col-start-1 row-start-1 mt-[0.5%] ml-[6%] h-[110%] w-[110%] place-self-center overflow-hidden">
            <Image
              src="/images/hero-tattoo.jpg"
              alt="A handpoke tattoo of a botanical branch being inked onto skin"
              width={800}
              height={800}
              priority
              className="circle-photo-img size-full object-cover object-[center_42%] scale-110"
            />
          </div>
        </div>
      </div>

      <div className="parallax-slow pointer-events-none col-start-1 row-start-1 mt-[50%] ml-[66%] h-[49.5%] w-[34%] min-h-0">
        <Image
          src="/images/flower.png"
          alt=""
          width={565}
          height={1627}
          className="h-full w-full object-contain object-top-right brightness-0 opacity-55"
        />
      </div>

      <div className="polaroid parallax-fast col-start-1 row-start-1 mr-[8.5%] mt-[20.5%] ml-auto w-[87.5%] max-w-[211px] min-h-0" data-cursor-lens>
        <Image
          src="/images/polaroid.png"
          alt="Misty mountain range in a vintage polaroid frame"
          width={903}
          height={1259}
          priority
          unoptimized
          className="h-auto w-full rotate-[19.5deg] drop-shadow-[0_16px_28px_rgba(40,24,10,0.18)]"
        />
      </div>

      <div className="torn-note parallax-fast col-start-1 row-start-1 mb-[13%] ml-[34%] mt-auto w-[34.5%] max-w-[280px] min-h-0">
        <div className="isolate grid rotate-[-3.5deg] drop-shadow-[0_12px_20px_rgba(40,24,10,0.12)]">
          <Image
            src="/images/paper.png"
            alt=""
            width={962}
            height={1163}
            className="z-0 col-start-1 row-start-1 h-auto w-full"
          />
          <div className="z-10 col-start-1 row-start-1 flex size-full flex-col items-center px-[16%] pt-[22%]">
            <p className="text-center font-sans text-[11px] leading-[1.95] font-light tracking-[0.22em] text-ink uppercase md:text-[12px]">
              Timeless
              <br />
              by nature.
              <br />
              Etched
              <br />
              by hand.
            </p>
            <SparkleStar className="mt-5 size-[10px] text-terracotta" />
          </div>
          <Image
            src="/images/stamp.png"
            alt="Handpoke Travels stamp"
            width={1137}
            height={695}
            className="z-20 col-start-1 row-start-1 mt-[66.5%] ml-[49.5%] h-auto w-[78%]"
          />
        </div>
      </div>
    </div>
  );
}
