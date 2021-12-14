import TradExpress from "./img/TradExpress.svg"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navcontainer">
      <header>
      <nav>
        <div>
         <Link to ="/"> <img src={TradExpress} alt="" /></Link>
        </div>
        <div className="links ">
          <Link to ="/buysell"> Instant Buy/Sell</Link>
         <Link to = "/">Learn</Link>
          <Link to= "/login">Log in</Link>
          {/* <button id="login">Log in</button> */}
          <Link to = "/getstarted">Get Started </Link>
        </div>
      </nav>
      </header>
    </div>
  );
};

export default Navbar;
