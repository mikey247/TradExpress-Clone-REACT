
import { Link } from "react-router-dom";
const Getstarted = () => {
  return (
    <>
      <div className="get-started-container">
      <div className="get-started">
        <div className="">
        <h1>Welcome!!</h1>

       <div class="buttongrid">
          <div>
            <button className="individual">
              <Link to="/getstarted">Individual</Link>
            </button>
          </div>
          <div>
            <button className="business">
              <Link id="businesslink" to="/business">Business</Link>
            </button>{" "}
          </div>
        </div> 
        
        <form action="" className="signup">
       
        

        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="E-mail" />
        <input type="phone" placeholder="Phone Number" />
        <input type="text" placeholder="Referral Code (Optional)" />

        

        <p id="t-c">
          By clicking the Sign Up button below, you agree to TradExpress <a href="/"><span className="terms-service">terms and service</span></a>
        </p>
        <button className="get-started-button">Sign up</button>
        <h4>
          Already have an account ? <Link to="/login"><span className="terms-service">Click here</span></Link>
        </h4>
      </form>
       
        
        </div>
      </div>
      </div>
    </>
  );
};

export default Getstarted;
