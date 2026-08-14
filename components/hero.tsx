"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CircularCta } from "./circular-cta";
import { Header } from "./header";
import { HeroCollage } from "./hero-collage";
import { HeroRail } from "./hero-rail";
import { FourPointStar, ScrollMouse } from "./icons";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(".nav-brand, .nav-item, .nav-cta", {
        y: -18,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
      })
        .from(".hero-eyebrow", { y: 16, opacity: 0, duration: 0.7 }, "-=0.45")
        .from(
          ".hero-line-inner, .hero-script",
          { y: 28, opacity: 0, duration: 0.9, stagger: 0.1 },
          "-=0.45",
        )
        .from(".hero-rule", { opacity: 0, y: 12, duration: 0.6 }, "-=0.55")
        .from(
          ".terracotta, .circle-stage",
          { scale: 0.84, opacity: 0, duration: 1.15, ease: "power2.inOut" },
          "-=1.1",
        )
        .from(
          ".circle-photo-img",
          { scale: 1.32, duration: 1.7, ease: "power2.out" },
          "-=1.15",
        )
        .from(".polaroid", { y: 28, opacity: 0, duration: 0.95 }, "-=1.2")
        .from(".torn-note", { y: -20, opacity: 0, duration: 0.95 }, "-=0.85")
        .from(
          ".parallax-slow, .star",
          { opacity: 0, duration: 0.8, stagger: 0.04 },
          "-=0.8",
        )
        .from(
          ".circular-cta, .section-dots",
          { opacity: 0, y: 16, duration: 0.7, stagger: 0.08 },
          "-=0.6",
        )
        .from(".scroll-hint", { opacity: 0, duration: 0.7 }, "-=0.55")
        .from(
          ".rail-top, .rail-mid",
          { scaleY: 0, duration: 1.05, stagger: 0.08, ease: "power2.inOut" },
          0.2,
        )
        .from(
          ".rail-dot, .rail-star",
          { scale: 0, opacity: 0, duration: 0.4, stagger: 0.14, ease: "back.out(1.8)" },
          0.7,
        );

      gsap.to(".circular-cta-ring", {
        rotate: 360,
        duration: 28,
        ease: "none",
        repeat: -1,
      });

      const mm = gsap.matchMedia();
      mm.add("(pointer: fine)", () => {
        const layers = [
          { sel: ".parallax-slow", ampX: 16, ampY: 10 },
          { sel: ".parallax-med", ampX: 26, ampY: 16 },
          { sel: ".parallax-fast", ampX: 38, ampY: 22 },
          { sel: ".circle-stage", ampX: 12, ampY: 8 },
        ];

        const movers = layers.map((layer) => ({
          toX: gsap.quickTo(layer.sel, "x", {
            duration: 0.95,
            ease: "power3.out",
          }),
          toY: gsap.quickTo(layer.sel, "y", {
            duration: 0.95,
            ease: "power3.out",
          }),
          ampX: layer.ampX,
          ampY: layer.ampY,
        }));

        const onMove = (event: MouseEvent) => {
          const x = event.clientX / window.innerWidth - 0.5;
          const y = event.clientY / window.innerHeight - 0.5;
          movers.forEach((m) => {
            m.toX(x * m.ampX);
            m.toY(y * m.ampY);
          });
        };

        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="hero-root flex h-svh flex-col text-ink"
    >
      <Header />

      <div className="flex min-h-0 flex-1">
        <HeroRail />

        <div className="grid min-h-0 flex-1 grid-cols-1 items-stretch gap-8 px-6 py-4 pb-8 md:grid-cols-[1fr_1.05fr] md:gap-10 lg:gap-12 lg:px-10 lg:py-0 xl:gap-16">
          <div className="hero-copy flex h-full min-h-0 flex-col pt-4 lg:pt-6 lg:pb-6">
            <div className="hero-eyebrow flex items-center gap-3">
              <p className="hero-kicker">
                Ink stories.
                <br />
                Mark souls.
              </p>
              <FourPointStar className="size-2.5 shrink-0 text-clay" />
            </div>

            <h1 className="mt-5 flex flex-col gap-1">
              <span className="hero-line-inner hero-display">Tattoos</span>
              <span className="hero-script">that travel</span>
              <span className="hero-line-inner hero-display">with you</span>
            </h1>

            <div className="hero-rule mt-7">
              <p className="hero-kicker hero-kicker-ink">
                Handpoke tattoos
                <br />
                around the world
              </p>
              <div className="mt-2.5 flex items-center gap-2.5">
                <span className="hero-rule-line" />
                <FourPointStar className="size-2 shrink-0 text-clay" />
              </div>
            </div>

            <div className="mt-10 md:mt-12">
              <CircularCta />
            </div>

            <a
              href="#destinations"
              className="scroll-hint mt-auto flex items-start gap-3 pt-10 font-sans text-[11px] font-normal tracking-[0.32em] uppercase text-[#4a4238] transition-colors hover:text-ink"
            >
              <span>
                <span className="block">Scroll to begin</span>
                <span className="mt-1 ml-[2.85rem] block h-9 w-px bg-[#4a4238]" />
              </span>
              <ScrollMouse className="mt-px h-[18px] w-[13px] shrink-0 text-clay" />
            </a>
          </div>

          <div className="h-full min-h-0 max-md:max-h-[42svh]">
            <HeroCollage />
          </div>
        </div>

        <ol
          className="section-dots hidden shrink-0 flex-col items-center justify-center gap-3 pr-4 md:flex"
          aria-hidden="true"
        >
          <li className="size-[9px] rounded-full bg-terracotta" />
          <li className="size-[7px] rounded-full border border-ink/70" />
          <li className="size-[7px] rounded-full border border-ink/70" />
          <li className="size-[7px] rounded-full border border-ink/70" />
        </ol>
      </div>
    </section>
  );
}
