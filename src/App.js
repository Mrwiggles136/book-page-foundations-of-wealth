import './App.css';

const PRICE = '$14.99';
const BUY_URL =
  process.env.REACT_APP_DOWNLOAD_URL ||
  'https://www.paypal.com/ncp/payment/MBDYH2EYWKPCL';
const COVER = `${process.env.PUBLIC_URL}/foundations-of-wealth-cover.jpg`;

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
            <img src={COVER} alt="Foundations of Wealth by Dee Gee, front and back cover" />
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
