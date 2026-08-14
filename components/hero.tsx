"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CircularCta } from "./circular-cta";
import { Header } from "./header";
import { HeroCollage } from "./hero-collage";
import { CrescentMoon, FourPointStar } from "./icons";

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
          ".hero-line-inner",
          { y: "110%", duration: 1.05, stagger: 0.14 },
          "-=0.45",
        )
        .from(
          ".hero-script",
          { opacity: 0, scale: 0.86, duration: 1, ease: "power2.out" },
          "-=0.8",
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
        .from(
          ".polaroid, .torn-note",
          { y: 48, opacity: 0, duration: 0.95, stagger: 0.14 },
          "-=1.2",
        )
        .from(
          ".parallax-slow, .star, .ink-dot, .watercolor",
          { opacity: 0, duration: 0.8, stagger: 0.04 },
          "-=0.8",
        )
        .from(
          ".circular-cta, .scroll-hint, .section-dots",
          { opacity: 0, y: 16, duration: 0.7, stagger: 0.08 },
          "-=0.6",
        );

      gsap.to(".circular-cta-ring", {
        rotate: 360,
        duration: 28,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".star", {
        scale: 1.18,
        opacity: 0.45,
        duration: 1.9,
        delay: 2.4,
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.4, repeat: -1, yoyo: true },
        ease: "sine.inOut",
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
      className="hero-root relative isolate flex min-h-svh flex-col overflow-hidden text-ink"
    >
      <div className="hero-paper" aria-hidden="true" />

      <Header />

      <FourPointStar className="star pointer-events-none absolute left-[22%] top-[22%] z-10 hidden size-2.5 text-ink/40 lg:block" />
      <FourPointStar className="star pointer-events-none absolute bottom-[18%] left-[38%] z-10 hidden size-2 text-ink/35 lg:block" />

      <div className="relative z-10 grid flex-1 grid-cols-1 items-center gap-8 px-[4vw] pb-8 pt-2 lg:grid-cols-[minmax(280px,0.88fr)_1.22fr] lg:gap-0 lg:px-[3.5vw] lg:pb-10 lg:pt-0">
        <div className="hero-copy relative z-20 max-w-[580px] pt-4 lg:pt-0">
          <p className="hero-eyebrow flex items-center gap-2.5 font-serif text-[11px] tracking-[0.32em] uppercase text-ink/75">
            Ink stories. Mark souls.
            <FourPointStar className="size-2.5 text-ink/60" />
          </p>

          <h1 className="relative mt-5 w-max">
            <span className="hero-line block overflow-hidden leading-[0.82]">
              <span className="hero-line-inner block font-display text-[clamp(3.5rem,9.2vw,8.25rem)] font-semibold tracking-[-0.038em] uppercase">
                Tattoos
              </span>
            </span>
            <span className="pointer-events-none absolute left-1/2 top-[49%] z-1 -translate-x-1/2 -translate-y-1/2">
              <span className="hero-script block font-script text-[clamp(2.6rem,7vw,6.2rem)] leading-none text-ink/90">
                that travel
              </span>
            </span>
            <span className="hero-line mt-[0.04em] block overflow-hidden leading-[0.82]">
              <span className="hero-line-inner block font-display text-[clamp(3.5rem,9.2vw,8.25rem)] font-semibold tracking-[-0.038em] uppercase">
                with you
              </span>
            </span>
          </h1>

          <p className="hero-rule mt-7 flex flex-wrap items-center gap-3 font-serif text-[10px] tracking-[0.34em] uppercase text-ink/70 md:mt-8 md:text-[11px]">
            <span className="h-px w-7 bg-ink/35" />
            Handpoke tattoos around the world
            <span className="flex items-center gap-2">
              <span className="h-px w-8 bg-ink/35" />
              <FourPointStar className="size-2 text-ink/55" />
            </span>
          </p>

          <div className="mt-10 flex items-end gap-8 md:mt-14">
            <CircularCta />
            <a
              href="#destinations"
              className="scroll-hint mb-3 flex items-center gap-3 font-serif text-[10px] tracking-[0.3em] uppercase text-ink/70 transition-colors hover:text-ink"
            >
              Scroll to begin
              <CrescentMoon className="size-[15px]" />
            </a>
          </div>
        </div>

        <div className="h-full min-h-[min(78vh,720px)] lg:-ml-8 xl:-ml-16">
          <HeroCollage />
        </div>
      </div>

      <ol
        className="section-dots pointer-events-none absolute right-[1.4vw] top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex"
        aria-hidden="true"
      >
        <li className="size-[9px] rounded-full bg-terracotta" />
        <li className="size-[7px] rounded-full border border-ink/70" />
        <li className="size-[7px] rounded-full border border-ink/70" />
        <li className="size-[7px] rounded-full border border-ink/70" />
      </ol>
    </section>
  );
}
