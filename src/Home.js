
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Appleimage from "./img/appleimage.svg";
import Playstoreimage from "./img/playstoreimage.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
     <div className="home">
        <div className="container">
         
          <div className="homestuff">
            <h1>Buy,sell and manage your Crypto on TradExpress.</h1>
            <h5 id="homestuff-h5">
              Easily Trade Cryptocurrencies like BTC, USDT, ETH,LTC & XRP with
              NGN.{" "}
            </h5>
            <button id="get"><Link to="/getstarted">Get Started</Link></button>

            <div className="stores">
              <button>
                <img src={Appleimage} alt="" />
              </button>
              <button>
                <img src={Playstoreimage} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />

      <div className="container">
        <footer>
          <div>
            <h3>Products</h3>
            <div>
              <a href="/">Bitcoin</a>
            </div>
            <div>
              <a href="/">Alts</a>
            </div>
            <div>
              <a href="/">Fiats</a>
            </div>
            <div>
              <a href="/">Refils</a>
            </div>
            <div>
              <a href="/">P2P</a>
            </div>
          </div>

          <div>
            <h3>Learn</h3>
            <div>
              <a href="/">Blog</a>
            </div>
            <div>
              <a href="/">Help Center</a>
            </div>
          </div>

          <div>
            <h3>Contacts</h3>
            <p>hello@tradeexpress.com</p>
            <p>support@tradeexpress.com</p>
          </div>

          <div>
            <h3>Company</h3>
            <div>
              <a href="/">About us</a>
            </div>
            <div>
              <a href="/">Careers</a>
            </div>
            <div>
              <a href="/">Rates</a>
            </div>
            <div>
              <a href="/">Mobile</a>
            </div>
          </div>
          <div>
            <h3>Legal</h3>
            <div>
              <a href="/"> Anti-money Laundering</a>
            </div>
            <div>
              <a href="/">Terms and Conditions</a>
            </div>
          </div>
        </footer>
      </div>

      <div className="copyright">
        &copy; TradeExpress Technologies All Rights Reserved.
      </div>
    </>
  );
};

export default Home;
