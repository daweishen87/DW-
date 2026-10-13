import Image from "next/image";
import { site, careGuide } from "@/config/site";
import { BuyButton, BuyNote, Price } from "@/components/BuyButton";
import { Faq } from "@/components/Faq";
import { Mascot } from "@/components/Mascot";
import { Picker } from "@/components/Picker";

const p = site.product;

export default function Home() {
  return (
    <>
      <header className="top">
        <a className="mark" href="#top" aria-label="DW">
          <Image src="/images/dw-logo.png" alt="DW" width={700} height={420} style={{ height: 30, width: "auto" }} priority />
        </a>
        <a className="mini" href="#founder">首批 100 雙</a>
      </header>

      <main id="top">
        <section className="hero" style={{ paddingBottom: 56 }}>
          <div className="wrap grid">
            <div>
              <h1>DW Founder<br />Edition</h1>
              <p className="sub"><b>黑化護腕。</b>全黑織紋，霧面 TPU Logo。DW 的第一個作品，從實際訓練經驗開始做起。</p>
              <Price />
              <div className="cta">
                <BuyButton />
                <BuyNote />
              </div>
            </div>
            <div className="photo">
              <Image src="/images/hero.jpg" width={1200} height={1230} priority sizes="(min-width: 820px) 50vw, 100vw"
                alt="一對 DW Founder Edition 黑色護腕，正面可見霧面 TPU 二頭肌 DW Logo" />
              <Mascot pose="curl" size={96} />
            </div>
          </div>
        </section>

        <section className="dark train" id="train">
          <Picker />
        </section>

        <section style={{ paddingTop: 24 }}>
          <div className="wrap split">
            <div>
              <h2>第一款護腕</h2>
              <p>全黑織紋護腕，正面是霧面 TPU 的 DW 標誌。</p>
              <ul className="specs">
                <li><span>顏色</span><span>{p.color}</span></li>
                <li><span>尺寸</span><span>{p.size}</span></li>
                <li><span>Logo</span><span>{p.logoMaterial}</span></li>
                <li><span>首批數量</span><span>{p.batch}</span></li>
                <li><span>首批附贈</span><span>{p.card}</span></li>
                <li><span>預購價</span><span>NT${p.price}（原定售價 NT${p.listPrice}）</span></li>
              </ul>
            </div>
            <div>
              <Image src="/images/product-flat.jpg" width={900} height={1600} sizes="(min-width: 820px) 40vw, 100vw"
                alt="攤開的 DW 護腕，可見織紋、魔鬼氈與霧面 TPU Logo" />
            </div>
          </div>
        </section>

        <section style={{ background: "#e9e4da" }}>
          <div className="wrap split rev">
            <div className="pair">
              <div>
                <Image src="/images/thumb-loop.jpg" width={900} height={1200} sizes="(min-width: 820px) 20vw, 50vw" alt="護腕攤開，可見拇指環與魔鬼氈" />
                <p className="cap">拇指環與魔鬼氈</p>
              </div>
              <div>
                <Image src="/images/wrapping.jpg" width={900} height={1036} sizes="(min-width: 820px) 20vw, 50vw" alt="手持 DW 護腕纏繞手腕的過程" style={{ aspectRatio: "3/4" }} />
                <p className="cap">纏繞手腕</p>
              </div>
            </div>
            <div>
              <h2><span className="zh">拇指環的選擇</span></h2>
              <p>我之前訓練時，遇過傳統護腕的拇指環太緊，戴久了大拇指會不舒服。所以這次特別挑了比較輕薄、戴起來存在感較低的拇指環，希望減少束縛感。</p>
              <p>取捨是：比起更緊的設計，固定感可能沒有那麼牢靠。手型、綁法和感受因人而異。</p>
              <ul className="fit" style={{ marginTop: 26 }}>
                <li>日常健身與重量訓練</li>
                <li>第一次買護腕的人</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="dark story">
          <div className="full">
            <Image src="/images/gym-press.jpg" width={1000} height={1333} sizes="100vw" alt="創辦人戴著 DW 護腕在健身房推舉" />
          </div>
          <div className="wrap inner">
            <div className="mascot-row"><Mascot pose="press" size={110} /></div>
            <p className="quote">You don’t have to be the best.</p>
            <p className="quote" style={{ color: "#a39f97" }}>You just have to keep going.</p>
            <p style={{ marginTop: 36 }}>DW 從我自己的訓練開始，護腕是第一個作品。接下來會依照大家實際使用的回饋，一版一版改。</p>
            <p>我一直最享受的，是健身的過程：訓練後的疲勞與痠痛、一次次慢慢累積、看著鏡子裡的自己逐漸改變。對我來說，最有價值的不只是結果，而是一路走過的過程。</p>
            <Image className="logo-inline" src="/images/dw-logo.png" width={700} height={420} alt="DW Logo" />
            <p>從設計到產品，DW 也在一步步成長。<br />這個 Logo 裡，藏著我們對成長的想像。</p>
          </div>
        </section>

        <section style={{ padding: "72px 0" }}>
          <div className="wrap">
            <div className="pair" style={{ maxWidth: 760 }}>
              <Image src="/images/logo-closeup.jpg" width={900} height={1338} sizes="(min-width: 820px) 380px, 50vw" alt="DW 護腕正面，霧面 TPU Logo 特寫" />
              <Image src="/images/gym-grip.jpg" width={900} height={1200} sizes="(min-width: 820px) 380px, 50vw" alt="戴著 DW 護腕握住健身器材把手" />
            </div>
          </div>
        </section>

        <section style={{ paddingTop: 0 }}>
          <div className="wrap">
            <h2><span className="zh">使用與保養</span></h2>
            <ul className="fit care" style={{ marginTop: 8 }}>
              {careGuide.map((c) => (
                <li key={c.title}><b>{c.title}</b><span>{c.text}</span></li>
              ))}
            </ul>
            <p className="care-note" style={{ marginTop: 14 }}>以上為一般性保養建議，並非經過產品測試的官方清洗規範。</p>
          </div>
        </section>

        <Faq />

        <section className="dark" id="founder">
          <div className="wrap split">
            <div>
              <h2>第一批，<br /><span className="zh">是 DW 開始的地方。</span></h2>
              <p>首批 100 雙，每雙附一張手寫編號的 Founder Card，從 001 到 100。</p>
              <p>而你，是 DW 最早的其中一位。</p>
              <div className="card" style={{ color: "var(--ink)" }}>
                <div className="n">No. 001 / 100</div>
                <small>Founder Card 編號範例，實際為手寫</small>
              </div>
              <div style={{ marginTop: 30 }}><Price light /></div>
              <BuyButton style={{ maxWidth: 420 }} />
              <BuyNote />
            </div>
            <div>
              <Image src="/images/pair.jpg" width={600} height={1160} sizes="(min-width: 820px) 360px, 80vw" alt="收在一起的 DW 護腕，Logo 朝前" style={{ maxWidth: 360, margin: "0 auto" }} />
            </div>
          </div>
        </section>

        <section className="follow">
          <div className="wrap">
            <h2>DW 還在持續成長。<br /><span className="zh">接下來的每一步，歡迎繼續關注。</span></h2>
            <div>
              <a className="btn alt" style={{ maxWidth: 260 }} href={site.links.line} target="_blank" rel="noopener noreferrer">加入 DW 社群</a>
              <p className="note">LINE 社群「DW 100 雙護腕」，不會直接購買。</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <Image src="/images/dw-logo.png" alt="DW" width={700} height={420} style={{ height: 26, width: "auto", marginBottom: 10 }} />
          <div>{site.tagline}</div>
          <div style={{ marginTop: 8 }}>
            <a href={site.links.buy} target="_blank" rel="noopener noreferrer">賣貨便預購</a>{" · "}
            <a href={site.links.line} target="_blank" rel="noopener noreferrer">LINE 社群</a>
          </div>
        </div>
      </footer>

      <div className="bar">
        <div><b>NT${p.price}</b><s>NT${p.listPrice}</s><br />首批預購價</div>
        <a href={site.links.buy} target="_blank" rel="noopener noreferrer">立即預購</a>
      </div>
    </>
  );
}
