import Appleimage from "./img/appleimage.svg"
import Playstoreimage from "./img/playstoreimage.svg"
import { Link } from "react-router-dom";

const Section4 = () => {
    return ( 
        <>
         {/* SECTION 4 */}

      <section className="section4">
        <div>
          <h4>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</h4>
          <h1>Create your account for free and start trading today!</h1>
          <button id="section4button"><Link to="/getstarted">Get Started</Link></button>

          <div className="buttondiv">
          <button><img src={Appleimage} alt="" /></button>
          <button><img src={Playstoreimage} alt="" /></button>
           
          </div>
        </div>
      </section>

        </>
     );
}
 
export default Section4;