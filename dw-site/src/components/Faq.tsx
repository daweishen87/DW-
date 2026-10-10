import { faq } from "@/config/site";
export function Faq() {
  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2>常見問題</h2>
        <div className="faq">
          {faq.map((item) => (
            <details key={item.q}>
              <summary>
                {item.q}
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>
                  {item.pending && <span className="tbc">【待確認】</span>}
                  {item.a}
                  {item.link && (
                    <>
                      {" "}
                      <a
                        href={item.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.link.text} ↗
                      </a>
                    </>
                  )}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
