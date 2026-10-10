"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site } from "@/config/site";

const links = [
  ["第一款護腕", "#product"],
  ["護腕細節", "#details"],
  ["DW 的故事", "#story"],
  ["使用與保養", "#care"],
  ["常見問題", "#faq"],
  ["首批 100 雙", "#founder"],
];
export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeMenu = () => {
    setOpen(false);
    requestAnimationFrame(() => buttonRef.current?.focus());
  };
  useEffect(() => {
    const update = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.65);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const prior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const background = document.querySelectorAll<HTMLElement>(
      "main, footer, .site-nav",
    );
    background.forEach((element) => {
      element.inert = true;
    });
    const timer = requestAnimationFrame(() =>
      menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus(),
    );
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        requestAnimationFrame(() => buttonRef.current?.focus());
      }
      if (event.key === "Tab") {
        const items = Array.from(
          menuRef.current?.querySelectorAll<HTMLElement>("button, a") || [],
        );
        const first = items[0],
          last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(timer);
      document.body.style.overflow = prior;
      background.forEach((element) => {
        element.inert = false;
      });
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return (
    <>
      <header
        className={`site-nav ${scrolled ? "is-scrolled" : ""} ${open ? "menu-open" : ""}`}
      >
        <a
          href="#top"
          className="nav-brand"
          aria-label="DW 首頁"
          onClick={() => setOpen(false)}
        >
          <Image src="/images/dw-logo.png" width={100} height={60} alt="DW" />
        </a>
        <div className="nav-actions">
          <a
            className="pill subtle nav-community"
            href={site.links.line}
            target="_blank"
            rel="noopener noreferrer"
          >
            加入 DW 社群
          </a>
          <a
            className="pill nav-buy"
            href={site.links.buy}
            target="_blank"
            rel="noopener noreferrer"
          >
            立即預購
          </a>
          <button
            ref={buttonRef}
            className="menu-toggle"
            aria-label={open ? "關閉選單" : "開啟選單"}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      {open && (
        <div
          className="menu-panel"
          id="site-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="網站導覽"
        >
          <button
            className="dialog-close"
            aria-label="關閉選單"
            onClick={closeMenu}
          >
            ×
          </button>
          <div className="menu-heading">
            DON’T STOP
            <br />
            UNTIL YOU WIN.
          </div>
          <nav aria-label="主要導覽">
            {links.map(([label, href], i) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                <span className="menu-index">0{i + 1}</span>
                {label}
                <span className="menu-arrow">↗</span>
              </a>
            ))}
          </nav>
          <div className="menu-bottom">
            <span>DW Founder Edition</span>
            <a href={site.links.line} target="_blank" rel="noopener noreferrer">
              LINE 社群 ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
}
