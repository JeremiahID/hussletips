import { useEffect, useRef, useState } from "react";


const coins = [
    { id: "bitcoin", symbol: "BTC", logo: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png" },
    { id: "ethereum", symbol: "ETH", logo: "https://assets.coingecko.com/coins/images/279/small/ethereum.png" },
    { id: "tether", symbol: "USDT", logo: "https://assets.coingecko.com/coins/images/325/small/Tether.png" },
    { id: "binancecoin", symbol: "BNB", logo: "https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png" },
    { id: "solana", symbol: "SOL", logo: "https://assets.coingecko.com/coins/images/4128/small/solana.png" },
    { id: "ripple", symbol: "XRP", logo: "https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png" },
];

const CurrencyUpdates = () => {
  const [prices, setPrices] = useState({});
  const [prevPrices, setPrevPrices] = useState({});
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef(null);

  const fetchPrices = async () => {
    try {
      const ids = coins.map((c) => c.id).join(",");
      const res = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd,ngn,gbp`
      );
      const data = await res.json();

      setPrevPrices(prices);
      setPrices(data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch prices", err);
    }
  };

  useEffect(() => {
    fetchPrices();
    intervalRef.current = setInterval(fetchPrices, 10000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const getPriceColor = (id, currency) => {
    if (!prevPrices[id]) return "";
    return prices[id][currency] > prevPrices[id][currency] ? "price-up": prices[id][currency] < prevPrices[id][currency] ? "price-down" : "";
  };

  return (
    <div className="marquee-container">
      {loading ? (
        <div className="marquee">
          {coins.map((coin) => (
            <div key={coin.id} className="skeleton-item" />
          ))}
        </div>
      ) : (
        <div className="marquee">
          {coins.map((coin) => (
            <div key={coin.id} className="marquee-item">
              <img src={coin.logo} alt={coin.symbol} className="currency-image"/>
              <span className="symbol fs-5 p-1">{coin.symbol}</span>

              <span className={getPriceColor(coin.id, "usd")}>
                ${prices[coin.id].usd.toLocaleString()}
              </span>

              <span className={getPriceColor(coin.id, "ngn")}>
                ₦{prices[coin.id].ngn.toLocaleString()}
              </span>

              <span className={getPriceColor(coin.id, "gbp")}>
                £{prices[coin.id].gbp.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencyUpdates;



