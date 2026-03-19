import './App.css';

function App() {
  const downloadUrl =
    process.env.REACT_APP_DOWNLOAD_URL ||
    'https://www.paypal.com/ncp/payment/MBDYH2EYWKPCL';

  return (
    <div className="App">
      <header className="App-header">
        <div className="hero">
          <div className="cover">
            <img src="/book-cover.png" />
            <div className="price">$14.99<br />Foundations of Wealth<br />Buy now only!</div>
          </div>
          <div className="pitch">
            <h1>Foundations Of Wealth</h1>
            <p className="strap">Build financial wisdom for a prosperous life.</p>
            <p className="emotional">Stop wondering if you're doing the right thing. Discover the clear, practical frameworks that turn income into lasting security — step by step, with heart and discipline.</p>
            <ul className="bullets">
              <li>Master the mindset of wealth creation</li>
              <li>Protect and grow your hard-earned assets</li>
              <li>Create lasting financial freedom for your family</li>
            </ul>
            <div className="cta-row">
              <a href="#buy" className="btn primary">Buy now — $14.99</a>
            </div>
            <p className="small">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="download"
              >
                Digital download instant access
              </a>
            </p>
          </div>
        </div>
        <section id="learn" className="details">
          <h2 id="buy">Why this book matters</h2>
          <p>A compassionate, no-fluff guide with action plans you can use today to start building a secure financial future.</p>
        </section>
      </header>
    </div>
  );
}

export default App;
