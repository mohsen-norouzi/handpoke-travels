"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CircularCta } from "./circular-cta";
import { Header } from "./header";
import { HeroCollage } from "./hero-collage";
import { HeroRail } from "./hero-rail";
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
        )
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
      <HeroRail />

      <FourPointStar className="star pointer-events-none absolute left-[22%] top-[22%] z-10 hidden size-2.5 text-ink/40 lg:block" />
      <FourPointStar className="star pointer-events-none absolute bottom-[18%] left-[38%] z-10 hidden size-2 text-ink/35 lg:block" />

      <div className="relative z-10 grid flex-1 grid-cols-1 items-center gap-8 py-2 pr-8 pb-8 pl-16 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:pt-0 lg:pr-12 lg:pb-10 lg:pl-[4.5rem] xl:gap-16">
        <div className="hero-copy relative z-20 pt-4 lg:pt-0">
          <div className="hero-eyebrow flex items-center gap-3">
            <p className="hero-kicker">
              Ink stories.
              <br />
              Mark souls.
            </p>
            <FourPointStar className="size-2.5 shrink-0 text-clay" />
          </div>

          <h1 className="relative mt-5 w-max">
            <span className="hero-line block overflow-hidden">
              <span className="hero-line-inner hero-display block">Tattoos</span>
            </span>
            <span className="pointer-events-none absolute top-[22%] left-[22%] z-1">
              <span className="hero-script block whitespace-nowrap">
                that travel
              </span>
            </span>
            <span className="hero-line mt-[0.18em] block overflow-hidden">
              <span className="hero-line-inner hero-display block">
                with you
              </span>
            </span>
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

          <div className="mt-10 flex items-end gap-8 md:mt-12">
            <CircularCta />
            <a
              href="#destinations"
              className="scroll-hint mb-3 flex items-center gap-3 font-sans text-[10px] tracking-[0.3em] uppercase text-clay transition-colors hover:text-ink"
            >
              Scroll to begin
              <CrescentMoon className="size-[15px]" />
            </a>
          </div>
        </div>

        <div className="h-full min-h-[min(70vh,640px)]">
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
