import TradExpress from "./img/TradExpress.svg"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navcontainer">
      {/* <header>
      <nav>
        <div>
         <Link to ="/"> <img src={TradExpress} alt="" /></Link>
        </div>
        <div className="links ">
          <Link to ="/buysell"> Instant Buy/Sell</Link>
         <Link to = "/">Learn</Link>
          <Link to= "/login">Log in</Link>
          <Link to = "/getstarted">Get Started </Link>
        </div>
      </nav>
      </header> */}

     <header>
     <nav className="navbar">
        {/* Logo */}
        <div> <Link to ="/"> <img src={TradExpress} alt="" /></Link></div>

        {/* NAVIGATION LINKS */}
        <ul className="nav-links">
        {/* <!-- USING CHECKBOX HACK --> */}
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">&#9776;</label>

        {/* NAVIGATION MENUS */}
       <div className="menu">
       <li><Link to ="/buysell"> Instant Buy/Sell</Link></li>
        <li><Link to = "/">Learn</Link></li>
        <li> <Link to= "/login">Log in</Link></li>
        <li><Link to = "/getstarted">Get Started </Link></li>
       </div>
        </ul>




      </nav>
     </header>


      
    </div>
  );
};

export default Navbar;
