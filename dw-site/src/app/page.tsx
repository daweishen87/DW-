import Image from "next/image";
import { site, careGuide } from "@/config/site";
import { BuyButton, BuyNote, Price } from "@/components/BuyButton";
import { Faq } from "@/components/Faq";
import { SiteNav } from "@/components/SiteNav";
import { ProductDetails } from "@/components/ProductDetails";
import { ScrollCollage } from "@/components/ScrollCollage";

const p = site.product;
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#product">
        跳至商品介紹
      </a>
      <SiteNav />
      <main id="top">
        <section className="hero">
          <Image
            className="hero-image"
            src="/images/gym-press.jpg"
            alt="創辦人戴著 DW 護腕在健身房推舉"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-shade" />
          <div className="hero-wordmark container" aria-hidden="true">
            DW
          </div>
          <div className="hero-content container">
            <h1>
              DW Founder Edition
              <br />
              黑化護腕。
            </h1>
            <p>
              全黑織紋，霧面 TPU Logo。
              <br />
              DW 的第一個作品，
              <br className="mobile-break" />
              從實際訓練經驗開始做起。
            </p>
            <div className="hero-actions">
              <BuyButton className="pill light" />
              <a className="pill glass" href="#product">
                第一款護腕 <span>↓</span>
              </a>
            </div>
            <BuyNote />
          </div>
        </section>
        <div className="identity-strip container">
          <span>DON’T STOP UNTIL YOU WIN.</span>
          <div>
            <span>全黑織紋</span>
            <span>霧面 TPU</span>
            <span>Founder Edition</span>
            <Image
              src="/images/dw-logo.png"
              alt="DW Logo"
              width={72}
              height={43}
            />
          </div>
        </div>
        <section className="intro container" id="product">
          <h2>
            DW 從我自己的訓練開始，
            <br />
            護腕是第一個作品。
            <br />
            <span>
              接下來會依照大家實際使用的回饋，
              <br className="desktop-break" />
              一版一版改。
            </span>
          </h2>
          <div className="stats">
            <div>
              <strong>
                50 × 8<span> cm</span>
              </strong>
              <p>約略尺寸</p>
            </div>
            <div>
              <strong>{p.batch}</strong>
              <p>首批數量</p>
            </div>
            <div>
              <strong>TPU</strong>
              <p>霧面 Logo</p>
            </div>
            <div>
              <strong>NT${p.price}</strong>
              <p>
                首批預購價 <s>NT${p.listPrice}</s>
              </p>
            </div>
          </div>
          <a className="pill" href="#details">
            第一款護腕 <span>↗</span>
          </a>
        </section>
        <ScrollCollage />
        <ProductDetails />
        <section className="training-photo container">
          <div className="wide-photo">
            <Image
              src="/images/gym-grip.jpg"
              alt="戴著 DW 護腕握住健身器材把手"
              fill
              sizes="(min-width: 1440px) 1192px, 90vw"
            />
            <div className="photo-caption">
              <span>日常健身與重量訓練</span>
              <span>DW FOUNDER EDITION</span>
            </div>
          </div>
        </section>
        <section className="story container" id="story">
          <div className="section-heading centered">
            <h2>DW 從我自己的訓練開始。</h2>
            <a
              className="pill"
              href={site.links.line}
              target="_blank"
              rel="noopener noreferrer"
            >
              加入 DW 社群 ↗
            </a>
          </div>
          <div className="story-grid">
            <div className="story-copy">
              <blockquote>
                You don’t have to be the best.
                <br />
                <span>You just have to keep going.</span>
              </blockquote>
              <p>
                我一直最享受的，是健身的過程：訓練後的疲勞與痠痛、一次次慢慢累積、看著鏡子裡的自己逐漸改變。對我來說，最有價值的不只是結果，而是一路走過的過程。
              </p>
              <div className="story-signature">
                <Image
                  src="/images/dw-logo.png"
                  width={80}
                  height={48}
                  alt="DW"
                />
                <span>DON’T STOP UNTIL YOU WIN.</span>
              </div>
            </div>
            <figure className="founder-portrait">
              <Image
                src="/images/gym-press.jpg"
                alt="創辦人戴著 DW 護腕在健身房推舉"
                fill
                sizes="(min-width: 900px) 34vw, 100vw"
              />
              <figcaption>
                DW<span>從實際訓練經驗開始做起。</span>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="founder-feature" id="founder">
          <div className="founder-card container">
            <div className="founder-info">
              <span className="eyebrow">DW FOUNDER EDITION</span>
              <h2>
                第一批，
                <br />是 DW 開始的地方。
              </h2>
              <p>
                首批 100 雙，每雙附一張手寫編號的 Founder Card，從 001 到 100。
              </p>
              <p>而你，是 DW 最早的其中一位。</p>
              <div className="edition-number">
                No. 001 <span>/ 100</span>
              </div>
              <small>Founder Card 編號範例，實際為手寫</small>
              <Price />
              <BuyButton className="pill" />
              <BuyNote />
            </div>
            <div className="founder-product">
              <Image
                src="/images/pair.jpg"
                alt="收在一起的 DW 護腕，Logo 朝前"
                fill
                sizes="(min-width: 900px) 40vw, 100vw"
              />
              <span className="edition-badge">首批 100 雙</span>
            </div>
          </div>
        </section>
        <section className="care-section" id="care">
          <div className="container">
            <div className="care-gallery">
              <div>
                <Image
                  src="/images/product-flat.jpg"
                  alt="攤開的 DW 護腕，可見織紋與魔鬼氈"
                  fill
                  sizes="40vw"
                />
              </div>
              <div>
                <Image
                  src="/images/thumb-loop.jpg"
                  alt="拇指環與魔鬼氈"
                  fill
                  sizes="25vw"
                />
              </div>
              <div>
                <Image
                  src="/images/wrapping.jpg"
                  alt="纏繞手腕"
                  fill
                  sizes="35vw"
                />
              </div>
            </div>
            <div className="care-content">
              <h2>使用與保養</h2>
              <div>
                <ol>
                  {careGuide.map((c, i) => (
                    <li key={c.title}>
                      <span className="care-number">0{i + 1}</span>
                      <div>
                        <h3>{c.title}</h3>
                        <p>{c.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="care-note">
                  以上為一般性保養建議，並非經過產品測試的官方清洗規範。
                </p>
              </div>
            </div>
          </div>
        </section>
        <Faq />
        <section className="closing">
          <Image
            src="/images/gym-grip.jpg"
            alt="DW 護腕訓練實拍"
            fill
            sizes="100vw"
          />
          <div className="closing-shade" />
          <div className="closing-copy">
            <h2>
              DW 還在持續成長。
              <br />
              接下來的每一步，
              <br />
              歡迎繼續關注。
            </h2>
            <a
              className="pill light"
              href={site.links.line}
              target="_blank"
              rel="noopener noreferrer"
            >
              加入 DW 社群 ↗
            </a>
            <p>LINE 社群「DW 100 雙護腕」，不會直接購買。</p>
          </div>
        </section>
      </main>
      <footer className="footer container">
        <div className="footer-top">
          <div>
            <p>
              DW Founder Edition
              <br />
              黑化護腕。
            </p>
            <BuyButton className="pill" />
          </div>
          <nav aria-label="頁尾導覽">
            <div>
              <span>DW</span>
              <a href="#product">第一款護腕</a>
              <a href="#story">DW 的故事</a>
              <a href="#founder">首批 100 雙</a>
            </div>
            <div>
              <span>了解更多</span>
              <a href="#care">使用與保養</a>
              <a href="#faq">常見問題</a>
              <a
                href={site.links.line}
                target="_blank"
                rel="noopener noreferrer"
              >
                LINE 社群 ↗
              </a>
            </div>
          </nav>
        </div>
        <div className="footer-bottom">
          <Image src="/images/dw-logo.png" alt="DW" width={94} height={56} />
          <span>{site.tagline}</span>
          <a href={site.links.buy} target="_blank" rel="noopener noreferrer">
            賣貨便預購 ↗
          </a>
        </div>
      </footer>
    </>
  );
}
