"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/config/site";
const tabs = [
  {
    label: "全黑設計",
    title: "第一款護腕",
    text: "全黑織紋護腕，正面是霧面 TPU 的 DW 標誌。",
    image: "hero.jpg",
    alt: "一對 DW Founder Edition 黑色護腕，正面可見霧面 TPU 二頭肌 DW Logo",
  },
  {
    label: "霧面 TPU Logo",
    title: "從設計到產品，DW 也在一步步成長。",
    text: "這個 Logo 裡，藏著我們對成長的想像。",
    image: "logo-closeup.jpg",
    alt: "DW 護腕正面，霧面 TPU Logo 特寫",
  },
  {
    label: "拇指環的選擇",
    title: "拇指環的選擇",
    text: "我之前訓練時，遇過傳統護腕的拇指環太緊，戴久了大拇指會不舒服。所以這次特別挑了比較輕薄、戴起來存在感較低的拇指環，希望減少束縛感。",
    extra:
      "取捨是：比起更緊的設計，固定感可能沒有那麼牢靠。手型、綁法和感受因人而異。",
    image: "thumb-loop.jpg",
    alt: "護腕攤開，可見拇指環與魔鬼氈",
  },
  {
    label: "日常重量訓練",
    title: "日常健身與重量訓練",
    text: "第一次買護腕的人",
    image: "wrapping.jpg",
    alt: "手持 DW 護腕纏繞手腕的過程",
  },
];
export function ProductDetails() {
  const [active, setActive] = useState(0);
  const item = tabs[active];
  const choose = (index: number) => {
    setActive(index);
    document.getElementById(`product-tab-${index}`)?.focus();
  };
  return (
    <section className="product-details container" id="details">
      <div className="section-heading centered">
        <h2>
          全黑織紋。
          <br />
          霧面 TPU Logo。
        </h2>
        <a
          className="pill"
          href={site.links.buy}
          target="_blank"
          rel="noopener noreferrer"
        >
          立即預購 ↗
        </a>
      </div>
      <div
        className="tabs"
        role="tablist"
        aria-label="護腕細節"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            choose((active + 1) % tabs.length);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            choose((active + tabs.length - 1) % tabs.length);
          }
          if (e.key === "Home") {
            e.preventDefault();
            choose(0);
          }
          if (e.key === "End") {
            e.preventDefault();
            choose(tabs.length - 1);
          }
        }}
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            role="tab"
            id={`product-tab-${i}`}
            aria-selected={i === active}
            aria-controls="product-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className="detail-panel"
        role="tabpanel"
        id="product-panel"
        aria-labelledby={`product-tab-${active}`}
        tabIndex={0}
      >
        <div className="detail-copy">
          <span className="eyebrow">0{active + 1} / DW FOUNDER EDITION</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          {item.extra && <p>{item.extra}</p>}
          {active === 0 && (
            <dl className="spec-list">
              <div>
                <dt>顏色</dt>
                <dd>{site.product.color}</dd>
              </div>
              <div>
                <dt>尺寸</dt>
                <dd>{site.product.size}</dd>
              </div>
              <div>
                <dt>Logo</dt>
                <dd>{site.product.logoMaterial}</dd>
              </div>
            </dl>
          )}
        </div>
        <div className={`detail-photo photo-${active}`}>
          <Image
            key={item.image}
            src={`/images/${item.image}`}
            alt={item.alt}
            fill
            sizes="(min-width: 900px) 55vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
