
import Image from "./img/Group 52.svg";
import Barchart from "./img/Group 28.svg";

const Section3 = () => {
    return ( 
    <> 
     {/* SECTION 3 */}
     <section className="section3">
        <div className="container2">
          <div class="grid2">
            <div className="flexname">
              <div className="numbers">1</div>
              <div>
                <h2>Create a Free Account</h2>
                <p>
                  Sign up for your free TradExpress Wallet on web, iOS, or
                  Android devices and follow our easy process to set up your
                  profile.
                </p>
              </div>
            </div>
            <div>
              <img src={Image} alt="" />
            </div>
          </div>

          <div class="grid3">
            <div>
              {" "}
              <img src={Image} alt="" />
            </div>

            <div className="flexname">
              <div className="numbers">2</div>
              <div>
                <h2>Deposit</h2>
                <p>
                  Choose your preferred deposit option like bank transfer,
                  credit/debit card or send digital asset directly to your
                  wallet for easy funding/withdrawal.
                </p>
              </div>
            </div>
          </div>

          <div class="grid4">
            <div className="flexname">
              <div className="numbers">3</div>
              <div>
                <h2>Buy/ Sell Crypto</h2>
                <p>
                  Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it in
                  your wallet or send it easily to friends and family.
                </p>
              </div>
            </div>

            <div>
              <img src={Barchart} alt="" />
            </div>
          </div>
        </div>
      </section>

    </>
     );
}
 
export default Section3;