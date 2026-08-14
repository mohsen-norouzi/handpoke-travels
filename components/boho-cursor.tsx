"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function BohoCursor() {
  const lens = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = lens.current;
    if (!el) {
      return;
    }

    const fine = window.matchMedia("(pointer: fine)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || motion.matches) {
      return;
    }

    gsap.set(el, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      scale: 0.4,
      opacity: 0,
    });

    const xTo = gsap.quickTo(el, "x", { duration: 0.55, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.55, ease: "power3.out" });

    let visible = false;

    const show = () => {
      visible = true;
      document.documentElement.classList.add("boho-cursor-on");
      gsap.to(el, {
        scale: 1,
        opacity: 1,
        duration: 0.45,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const hide = () => {
      visible = false;
      document.documentElement.classList.remove("boho-cursor-on");
      gsap.to(el, {
        scale: 0.4,
        opacity: 0,
        duration: 0.32,
        ease: "power2.inOut",
        overwrite: "auto",
      });
    };

    const onMove = (event: PointerEvent) => {
      xTo(event.clientX);
      yTo(event.clientY);

      const hit = (event.target as Element | null)?.closest?.("[data-cursor-lens]");
      if (hit && !visible) {
        show();
      } else if (!hit && visible) {
        hide();
      }
    };

    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.classList.remove("boho-cursor-on");
    };
  });

  return (
    <div
      ref={lens}
      className="boho-cursor pointer-events-none fixed top-0 left-0 z-50 hidden size-[min(42vw,12.5rem)] will-change-transform [@media(pointer:fine)]:block"
      aria-hidden="true"
    >
      <div className="boho-cursor-disc relative size-full overflow-hidden">
        <Image
          src="/images/working.png"
          alt=""
          width={1254}
          height={1254}
          className="size-full object-cover object-[center_38%] scale-110"
        />
      </div>
    </div>
  );
}
