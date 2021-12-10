import { Link } from "react-router-dom";

const Sell = () => {
    return ( 
        <>
        <div className="instant-container">
            <div className="instant">
            <h1 id="instant-text">Buy/Sell Instantly</h1>

            <div class="buttongrid">
            <div>
              <button className="individual-biz">
                <Link to="/buysell">Buy</Link>
              </button>
            </div>
            <div>
              <button className="business-biz">
                <Link to="/sell">Sell</Link>
              </button>{" "}
            </div>
          </div>
          
                
            <form action="" className="buy-sell-form">
            <br /> 
            <br />

           <label htmlFor="coins">Coin to Sell</label>
           <select name="coins" id="coins">
               <option value="Bitcoin">Bitcoin (BTC)</option>
               <option value="USDT">USDT</option>
               <option value="Ethereum">ETHEREUM (ETH)</option>
               <option value="Litecoin">Litecoin (LTC)</option>
               <option value="Ripple">Ripple (XRP)</option>

           </select>
           <label htmlFor="currency">Currency</label>
           <select name="coins" id="coins">
               <option value="Naira">NGN</option>
               <option value="Dollar">USD</option>
               <option value="Pounds">GBP</option>
               <option value="Euro">EUR</option>
           </select>

           <label htmlFor="Ammount">Ammount</label>
           <input type="number" />
           <button className="instant-button">Continue</button>
       </form>


            </div>
        </div>




        </>
     );
}
 
export default Sell;