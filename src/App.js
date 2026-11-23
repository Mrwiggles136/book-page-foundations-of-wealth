import './App.css';

const PRICE = '$14.99';
const BUY_URL =
  process.env.REACT_APP_DOWNLOAD_URL ||
  'https://www.paypal.com/ncp/payment/MBDYH2EYWKPCL';
const IMG = process.env.PUBLIC_URL;

function BuyButton() {
  return (
    <div className="buy">
      <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="btn primary">
        Buy Now — {PRICE}
      </a>
      <a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="download">
        Digital download · Instant access
      </a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <main className="page">
        <section className="hero">
          <div className="cover">
            <picture>
              <source
                type="image/webp"
                srcSet={`${IMG}/foundations-of-wealth-cover-760.webp 760w, ${IMG}/foundations-of-wealth-cover-1200.webp 1200w`}
                sizes="(max-width: 820px) 100vw, 560px"
              />
              <img
                src={`${IMG}/foundations-of-wealth-cover-1200.jpg`}
                width="1200"
                height="800"
                fetchpriority="high"
                alt="Foundations of Wealth by Dee Gee: book cover with gold coins and a rising arrow, front, spine and back"
              />
            </picture>
          </div>

          <div className="pitch">
            <p className="eyebrow">By Dee Gee</p>
            <h1>Foundations of Wealth</h1>
            <p className="strap">Building Financial Wisdom for a Prosperous Life</p>
            <p className="lead">
              Stop wondering if you're doing the right thing with your money. This book gives you
              clear, practical steps that turn your income into lasting wealth and security.
            </p>
            <ul className="bullets">
              <li>Master the mindset of wealth creation</li>
              <li>Learn how to grow and protect your assets</li>
              <li>Build habits for long-term financial success</li>
              <li>Create a legacy of generational wealth</li>
            </ul>
            <BuyButton />
          </div>
        </section>

        <section className="details">
          <h2>Why This Book Matters</h2>
          <p>
            A compassionate, no-fluff guide with action plans you can start using today to build a
            secure financial future for you and your family.
          </p>
        </section>

        <section className="details">
          <h2>What You'll Learn in Foundations of Wealth</h2>
          <ul className="bullets">
            <li><strong>The wealth mindset:</strong> how to think about money so your income starts working for you.</li>
            <li><strong>Growing your money:</strong> the basics of saving and investing for the long term.</li>
            <li><strong>Protecting what you build:</strong> keeping your hard-earned assets safe.</li>
            <li><strong>Everyday money habits:</strong> simple routines that lead to lasting financial success.</li>
            <li><strong>Generational wealth:</strong> how to build a legacy for your family.</li>
          </ul>
        </section>

        <section className="details">
          <h2>Who This Book Is For</h2>
          <p>
            Foundations of Wealth is a personal finance book for beginners and anyone who wants a clear
            plan for their money: people starting to save, families planning for the future, and
            anyone ready to move from living paycheck to paycheck toward financial freedom.
          </p>
        </section>

        <section className="author">
          <h2>About the Author</h2>
          <p>
            <strong>Dee Gee</strong> is a financial educator and entrepreneur dedicated to helping
            people achieve financial independence and build wealth for generations.
          </p>
        </section>

        <section className="closing">
          <h2>Take Control of Your Financial Future Today</h2>
          <BuyButton />
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Dee Gee · Foundations of Wealth</footer>
    </div>
  );
}

export default App;
