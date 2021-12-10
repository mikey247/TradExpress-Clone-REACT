import { Link } from "react-router-dom";
const Business = () => {
  return (
    <>
      <div className="get-started-container">
        <div className="get-started">
        <h1>Welcome!!</h1>

          <div class="buttongrid">
            <div>
              <button className="individual-biz">
                <Link to="/getstarted">Individual</Link>
              </button>
            </div>
            <div>
              <button className="business-biz">
                <Link to="/business">Business</Link>
              </button>{" "}
            </div>
          </div>

          <form action="" className="signup">
            {/* <Link to ="/individual">Individual</Link>
        <Link to ="/business">Business</Link> */}

            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Business Name" />
            <input type="email" placeholder="E-mail" />
            <input type="phone" placeholder="Phone Number" />
            <input type="text" placeholder="Referral Code (Optional)" />

            <p id="t-c">
              By clicking the Sign Up button below, you agree to TradExpress{" "}
              <Link to="/login"><span className="terms-service">terms and service</span></Link>
            </p>
            <button className="get-started-button">Sign up</button>
            <h4>
              Already have an account ? <a href="/"><span className="terms-service">Click here</span></a>
            </h4>
          </form>
        </div>
      </div>
    </>
  );
};

export default Business;
