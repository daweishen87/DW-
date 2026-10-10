"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
export function ScrollCollage() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, -rect.top / (rect.height - window.innerHeight)),
      );
      el.style.setProperty("--progress", String(motion.matches ? 0 : progress));
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", scroll);
    };
  }, []);
  return (
    <section className="collage-scene" ref={ref} aria-label="DW 護腕細節">
      <div className="collage-sticky container">
        <div className="collage-images">
          <div className="collage-photo c-one">
            <Image
              src="/images/product-flat.jpg"
              alt="攤開的 DW 護腕"
              fill
              sizes="35vw"
            />
          </div>
          <div className="collage-photo c-two">
            <Image
              src="/images/gym-grip.jpg"
              alt="戴著 DW 護腕握住健身器材"
              fill
              sizes="35vw"
            />
          </div>
          <div className="collage-photo c-three">
            <Image
              src="/images/wrapping.jpg"
              alt="纏繞手腕"
              fill
              sizes="35vw"
            />
          </div>
          <div className="collage-photo c-four">
            <Image
              src="/images/logo-closeup.jpg"
              alt="霧面 TPU Logo 特寫"
              fill
              sizes="35vw"
            />
          </div>
        </div>
        <div className="collage-title">
          <h2>
            DW Founder
            <br />
            Edition
          </h2>
          <p>黑化護腕。</p>
          <a className="pill light" href="#details">
            第一款護腕 <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
