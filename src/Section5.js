import Chatbox from "./img/chatbox.svg";
import Quotation from "./img/quotation.svg";
import Guy1 from "./img/guy1.jpeg"
import Guy2 from "./img/guy2.jpeg"
import Guy3 from "./img/guy3.jpeg"

const Section5 = () => {
    return ( 
        <>
        <section className="section5">
        <div className="container">
          <h1>Customer's Review</h1>

          <div class="review">
            <div>
              <img src={Chatbox} alt="" />
              <div className="review-content">
                <img src={Quotation} alt="" />
                <p>
                  Trading on TradExpress mobile & web platforms has been a
                  smooth experience for me quite easy to navigate.
                </p>
              </div>
              <div className="nametag">
                <img src={Guy3} alt="" />
                <div>
                  <h4>Ireti</h4>
                  <p>Nigeria</p>
                </div>
              </div>
            </div>

            <div>
              <img src={Chatbox} alt="" />
              <div className="review-content">
                <img src={Quotation} alt="" />
                <p>
                  They have the best rate compared to other platforms with fast
                  payout.
                </p>
              </div>
              <div className="nametag">
                <img src={Guy2} alt="" />
                <div>
                  <h4>Bayo</h4>
                  <p>USA</p>
                </div>
              </div>
            </div>

            <div>
              <img src={Chatbox} alt="" />
              <div className="review-content">
                <img src={Quotation} alt="" />
                <p>
                  Easy to fund and withdraw coins or cash on their platform, I
                  will definitely trade with them again.
                </p>
              </div>
              <div className="nametag">
                <img src={Guy1} alt="" />
                <div>
                  <h4>Olagoke</h4>
                  <p>Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        </>
     );
}
 
export default Section5;